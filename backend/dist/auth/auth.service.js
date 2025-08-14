"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const argon2 = require("argon2");
const library_1 = require("@prisma/client/runtime/library");
const users_service_1 = require("../users/users.service");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
let AuthService = class AuthService {
    prismaService;
    usersService;
    jwtService;
    configService;
    constructor(prismaService, usersService, jwtService, configService) {
        this.prismaService = prismaService;
        this.usersService = usersService;
        this.jwtService = jwtService;
        this.configService = configService;
    }
    async createUser(dto) {
        const hash = await argon2.hash(dto.password);
        try {
            const user = await this.prismaService.user.create({
                data: {
                    ...dto,
                    password: hash,
                },
            });
            const { password, ...result } = user;
            return result;
        }
        catch (error) {
            if (error instanceof library_1.PrismaClientKnownRequestError) {
                if (error.code === 'P2002') {
                    throw new common_1.ConflictException('A user with this email already exists');
                }
                throw new common_1.InternalServerErrorException('Something went wrong');
            }
        }
        throw new common_1.InternalServerErrorException('Something went wrong');
    }
    async validateUser(email, password) {
        try {
            const user = await this.usersService.findOne(email);
            const passMatch = await argon2.verify(user.password, password);
            if (!passMatch)
                throw new common_1.ForbiddenException('Incorrect credentials');
            const { password: _password, ...safeUser } = user;
            return safeUser;
        }
        catch (error) {
            if (error instanceof library_1.PrismaClientKnownRequestError &&
                error.code === 'P2025') {
                throw new common_1.ForbiddenException('Incorrect credentials');
            }
            if (error instanceof common_1.NotFoundException) {
                throw new common_1.ForbiddenException('Incorrect credentials');
            }
            throw new common_1.InternalServerErrorException('Something went wrong');
        }
    }
    async login(user) {
        const payload = { email: user.email, sub: user.id, role: user.role };
        const accessToken = this.jwtService.sign(payload, {
            secret: this.configService.get('JWT_SECRET'),
            expiresIn: '15m',
        });
        const refreshToken = this.jwtService.sign(payload, {
            secret: this.configService.get('JWT_REFRESH_SECRET'),
            expiresIn: '7d',
        });
        await this.usersService.updateRefreshToken(user.id, refreshToken);
        return {
            accessToken,
            refreshToken,
        };
    }
    async refreshToken(email, refreshToken) {
        try {
            const user = await this.usersService.findOne(email);
            if (!user || !user.refreshToken)
                throw new common_1.ForbiddenException('Access denied');
            const isValid = await argon2.verify(user.refreshToken, refreshToken);
            if (!isValid)
                throw new common_1.ForbiddenException('Invalid refresh token');
            return this.login(user);
        }
        catch (err) {
            throw new common_1.ForbiddenException('Invalid refresh token');
        }
    }
    async logout(userId) {
        await this.usersService.updateRefreshToken(userId, null);
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        users_service_1.UsersService,
        jwt_1.JwtService,
        config_1.ConfigService])
], AuthService);
//# sourceMappingURL=auth.service.js.map
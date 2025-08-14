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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const dto_1 = require("./dto");
const guards_1 = require("./guards");
const helpers_1 = require("./utils/helpers");
const jwt_refresh_auth_guard_1 = require("./guards/jwt-refresh-auth.guard");
const decorators_1 = require("./decorators");
const constants_1 = require("./utils/constants");
let AuthController = class AuthController {
    authService;
    constructor(authService) {
        this.authService = authService;
    }
    async createUser(dto) {
        return this.authService.createUser(dto);
    }
    async login(user, res) {
        const { accessToken, refreshToken } = await this.authService.login(user);
        const ctx = { res, reply: res };
        (0, helpers_1.setCookie)(ctx, 'access_token', accessToken, constants_1.accessTokenOptions);
        (0, helpers_1.setCookie)(ctx, 'refresh_token', refreshToken, constants_1.refreshTokenOptions);
        const { password, ...userWithoutPassword } = user;
        return {
            data: userWithoutPassword,
            message: 'Login successful',
        };
    }
    async refresh(user, req, res) {
        const { accessToken, refreshToken } = await this.authService.refreshToken(user.email, req.cookies?.['refresh_token']);
        const ctx = { res, reply: res };
        (0, helpers_1.setCookie)(ctx, 'access_token', accessToken, constants_1.accessTokenOptions);
        (0, helpers_1.setCookie)(ctx, 'refresh_token', refreshToken, constants_1.refreshTokenOptions);
        return { message: 'Token refreshed successfully' };
    }
    async logout(user, res) {
        const ctx = { res, reply: res };
        (0, helpers_1.removeCookie)(ctx, 'access_token');
        (0, helpers_1.removeCookie)(ctx, 'refresh_token');
        await this.authService.logout(user.userId);
        return { message: 'Logged out successfully' };
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.HttpCode)(201),
    (0, common_1.Post)('create-user'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "createUser", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.UseGuards)(guards_1.LocalAuthGuard),
    (0, common_1.Post)('login'),
    __param(0, (0, decorators_1.GetUser)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.UseGuards)(jwt_refresh_auth_guard_1.JwtRefreshGuard),
    (0, common_1.Post)('refresh-token'),
    __param(0, (0, decorators_1.GetUser)()),
    __param(1, (0, common_1.Request)()),
    __param(2, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "refresh", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.UseGuards)(guards_1.JwtAuthGuard),
    (0, common_1.Post)('logout'),
    __param(0, (0, decorators_1.GetUser)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "logout", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map
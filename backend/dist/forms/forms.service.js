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
exports.FormsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const class_transformer_1 = require("class-transformer");
const library_1 = require("@prisma/client/runtime/library");
let FormsService = class FormsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createForm(data, user) {
        const { userId } = user;
        const plainConfig = (0, class_transformer_1.instanceToPlain)(data.config);
        try {
            const form = await this.prisma.form.create({
                data: {
                    name: data.name.toLowerCase(),
                    config: plainConfig,
                    createdById: userId,
                },
            });
            return form;
        }
        catch (error) {
            if (error instanceof library_1.PrismaClientKnownRequestError &&
                error.code === 'P2002') {
                throw new common_1.ConflictException('A form with this name already exists.');
            }
            throw new common_1.InternalServerErrorException('Something went wrong while creating the form.');
        }
    }
    async getForm(name) {
        try {
            return await this.prisma.form.findFirstOrThrow({
                where: {
                    name: name,
                },
            });
        }
        catch (error) {
            if (error instanceof library_1.PrismaClientKnownRequestError &&
                error.code === 'P2025') {
                throw new common_1.NotFoundException('Form not found');
            }
            throw error;
        }
    }
};
exports.FormsService = FormsService;
exports.FormsService = FormsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], FormsService);
//# sourceMappingURL=forms.service.js.map
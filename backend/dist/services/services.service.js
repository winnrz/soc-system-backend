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
exports.ServicesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const forms_service_1 = require("../forms/forms.service");
const library_1 = require("@prisma/client/runtime/library");
let ServicesService = class ServicesService {
    prismaService;
    formService;
    constructor(prismaService, formService) {
        this.prismaService = prismaService;
        this.formService = formService;
    }
    async createService(body, user) {
        const { userId } = user;
        const formName = body.name;
        const form = await this.formService.getForm(formName);
        try {
            return await this.prismaService.service.create({
                data: {
                    name: body.name,
                    adminId: userId,
                    formId: form.id,
                },
            });
        }
        catch (error) {
            if (error instanceof library_1.PrismaClientKnownRequestError &&
                error.code === 'P2002') {
                throw new common_1.ConflictException('A service with this name already exists.');
            }
            throw new common_1.InternalServerErrorException('An error occurred while creating the service.');
        }
    }
    async getService(name) {
        try {
            return await this.prismaService.service.findFirstOrThrow({
                where: {
                    name: name,
                },
            });
        }
        catch (error) {
            if (error instanceof library_1.PrismaClientKnownRequestError &&
                error.code === 'P2025') {
                throw new common_1.NotFoundException(`Service (${name}) not found`);
            }
            throw error;
        }
    }
};
exports.ServicesService = ServicesService;
exports.ServicesService = ServicesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        forms_service_1.FormsService])
], ServicesService);
//# sourceMappingURL=services.service.js.map
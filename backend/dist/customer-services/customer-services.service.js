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
exports.CustomerServicesService = void 0;
const common_1 = require("@nestjs/common");
const library_1 = require("@prisma/client/runtime/library");
const prisma_service_1 = require("../prisma/prisma.service");
let CustomerServicesService = class CustomerServicesService {
    prismaService;
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async getCustomerServices(id) {
        try {
            const customerServices = await this.prismaService.customerService.findMany({
                where: {
                    customerId: id,
                },
                select: {
                    service: {
                        select: {
                            name: true,
                            form: true,
                        },
                    },
                    dataSource: {
                        select: {
                            id: true,
                            data: true,
                        },
                    },
                },
            });
            const transformedCustomerServices = customerServices.map(({ service = {}, dataSource = {} }) => ({
                name: service?.name ?? null,
                form: service?.form ?? null,
                dataSource: {
                    id: dataSource?.id ?? null,
                    data: dataSource?.data ?? [],
                },
            }));
            return transformedCustomerServices;
        }
        catch (error) {
            console.error('Failed to fetch customer service forms:', error);
            throw new Error('Failed to fetch customers');
        }
    }
    async findOne(customerId) {
        try {
            return await this.prismaService.customerService.findFirstOrThrow({
                where: {
                    customerId,
                },
            });
        }
        catch (error) {
            if (error instanceof library_1.PrismaClientKnownRequestError &&
                error.code === 'P2025') {
                throw new common_1.NotFoundException('Customer service not found');
            }
            throw error;
        }
    }
};
exports.CustomerServicesService = CustomerServicesService;
exports.CustomerServicesService = CustomerServicesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CustomerServicesService);
//# sourceMappingURL=customer-services.service.js.map
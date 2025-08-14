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
exports.CustomersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const services_service_1 = require("../services/services.service");
const library_1 = require("@prisma/client/runtime/library");
const data_source_service_1 = require("../data-source/data-source.service");
let CustomersService = class CustomersService {
    servicesService;
    prismaService;
    dataSourceService;
    constructor(servicesService, prismaService, dataSourceService) {
        this.servicesService = servicesService;
        this.prismaService = prismaService;
        this.dataSourceService = dataSourceService;
    }
    async createCustomer(body) {
        const { name, services, dataSource } = body;
        const serviceEntities = await Promise.all(services.map(async (serviceName) => {
            try {
                return await this.servicesService.getService(serviceName);
            }
            catch (error) {
                if (error instanceof common_1.NotFoundException) {
                    throw new common_1.NotFoundException(`Service (${serviceName}) not found`);
                }
                throw error;
            }
        }));
        const customerServicePayload = [];
        for (const service of serviceEntities) {
            if (service.name.toLowerCase() === 'alienvault' &&
                dataSource.length > 0) {
                const ds = await this.dataSourceService.createDataSource(dataSource);
                customerServicePayload.push({
                    serviceId: service.id,
                    dataSourceId: ds.id,
                });
            }
            else {
                customerServicePayload.push({
                    serviceId: service.id,
                });
            }
        }
        try {
            const customer = await this.prismaService.customer.create({
                data: {
                    name,
                    customerServices: {
                        create: customerServicePayload,
                    },
                },
                include: {
                    customerServices: {
                        include: {
                            service: true,
                            dataSource: true,
                        },
                    },
                },
            });
            return customer;
        }
        catch (error) {
            if (error instanceof library_1.PrismaClientKnownRequestError &&
                error.code === 'P2002') {
                throw new common_1.ConflictException('Customer with this name already exists');
            }
            throw error;
        }
    }
    async findAll() {
        try {
            return await this.prismaService.customer.findMany();
        }
        catch (error) {
            console.error('Failed to fetch customers:', error);
            throw new Error('Failed to fetch customers.');
        }
    }
    async findOne(id) {
        try {
            return await this.prismaService.customer.findUniqueOrThrow({
                where: {
                    id: id,
                },
            });
        }
        catch (error) {
            if (error instanceof library_1.PrismaClientKnownRequestError &&
                error.code === 'P2025') {
                throw new common_1.NotFoundException('Customer not found');
            }
            throw error;
        }
    }
};
exports.CustomersService = CustomersService;
exports.CustomersService = CustomersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [services_service_1.ServicesService,
        prisma_service_1.PrismaService,
        data_source_service_1.DataSourceService])
], CustomersService);
//# sourceMappingURL=customers.service.js.map
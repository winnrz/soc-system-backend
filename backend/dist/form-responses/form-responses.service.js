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
exports.FormResponsesService = void 0;
const common_1 = require("@nestjs/common");
const library_1 = require("@prisma/client/runtime/library");
const customer_services_service_1 = require("../customer-services/customer-services.service");
const customers_service_1 = require("../customers/customers.service");
const forms_service_1 = require("../forms/forms.service");
const prisma_service_1 = require("../prisma/prisma.service");
let FormResponsesService = class FormResponsesService {
    prismaService;
    customersService;
    formsService;
    customerServicesService;
    constructor(prismaService, customersService, formsService, customerServicesService) {
        this.prismaService = prismaService;
        this.customersService = customersService;
        this.formsService = formsService;
        this.customerServicesService = customerServicesService;
    }
    async createFormResponse(name, response, userId, customerId) {
        try {
            const form = await this.formsService.getForm(name);
            const customer = await this.customersService.findOne(customerId);
            const customerService = await this.customerServicesService.findOne(customerId);
            await this.prismaService.formResponse.create({
                data: {
                    filledById: userId,
                    customerServiceId: customerService.id,
                    formId: form.id,
                    responseData: response,
                },
            });
            return { message: 'Form response submitted successfully' };
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            console.error('Failed to create form response:', error);
            throw new common_1.InternalServerErrorException('Failed to create form response');
        }
    }
    async getAll() {
        try {
            return await this.prismaService.formResponse.findMany({
                include: {
                    form: {
                        select: {
                            name: true,
                        },
                    },
                    customerService: {
                        select: {
                            customer: {
                                select: {
                                    name: true,
                                },
                            },
                        },
                    },
                    filledBy: {
                        select: {
                            firstName: true,
                            lastName: true,
                        },
                    },
                },
                orderBy: {
                    filledAt: 'desc',
                },
            });
        }
        catch (error) {
            console.error('Failed to fetch form responses:', error);
            throw new Error('Failed to fetch form responses.');
        }
    }
    async getOne(formResponseId) {
        try {
            return await this.prismaService.formResponse.findUniqueOrThrow({
                where: {
                    id: formResponseId,
                },
                include: {
                    form: {
                        select: {
                            name: true,
                        },
                    },
                    customerService: {
                        select: {
                            customer: {
                                select: {
                                    name: true,
                                },
                            },
                        },
                    },
                    filledBy: {
                        select: {
                            firstName: true,
                            lastName: true,
                        },
                    },
                },
            });
        }
        catch (error) {
            if (error instanceof library_1.PrismaClientKnownRequestError &&
                error.code === 'P2025') {
                throw new common_1.NotFoundException('Form response not found');
            }
            throw error;
        }
    }
};
exports.FormResponsesService = FormResponsesService;
exports.FormResponsesService = FormResponsesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        customers_service_1.CustomersService,
        forms_service_1.FormsService,
        customer_services_service_1.CustomerServicesService])
], FormResponsesService);
//# sourceMappingURL=form-responses.service.js.map
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
exports.CustomerServicesController = void 0;
const common_1 = require("@nestjs/common");
const customer_services_service_1 = require("./customer-services.service");
let CustomerServicesController = class CustomerServicesController {
    customerServicesService;
    constructor(customerServicesService) {
        this.customerServicesService = customerServicesService;
    }
    async getCustomerServiceForms(id) {
        const numericId = parseInt(id, 10);
        if (isNaN(numericId)) {
            throw new common_1.BadRequestException('Invalid customer ID');
        }
        const data = await this.customerServicesService.getCustomerServices(numericId);
        return {
            data,
            message: 'Customer service forms fetched successfully',
        };
    }
};
exports.CustomerServicesController = CustomerServicesController;
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CustomerServicesController.prototype, "getCustomerServiceForms", null);
exports.CustomerServicesController = CustomerServicesController = __decorate([
    (0, common_1.Controller)('customer-services'),
    __metadata("design:paramtypes", [customer_services_service_1.CustomerServicesService])
], CustomerServicesController);
//# sourceMappingURL=customer-services.controller.js.map
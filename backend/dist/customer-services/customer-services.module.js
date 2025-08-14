"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerServicesModule = void 0;
const common_1 = require("@nestjs/common");
const customer_services_controller_1 = require("./customer-services.controller");
const customer_services_service_1 = require("./customer-services.service");
let CustomerServicesModule = class CustomerServicesModule {
};
exports.CustomerServicesModule = CustomerServicesModule;
exports.CustomerServicesModule = CustomerServicesModule = __decorate([
    (0, common_1.Module)({
        controllers: [customer_services_controller_1.CustomerServicesController],
        providers: [customer_services_service_1.CustomerServicesService],
        exports: [customer_services_service_1.CustomerServicesService]
    })
], CustomerServicesModule);
//# sourceMappingURL=customer-services.module.js.map
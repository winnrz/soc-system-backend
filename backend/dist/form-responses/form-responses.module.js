"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormResponsesModule = void 0;
const common_1 = require("@nestjs/common");
const form_responses_service_1 = require("./form-responses.service");
const form_responses_controller_1 = require("./form-responses.controller");
const customer_services_module_1 = require("../customer-services/customer-services.module");
const forms_module_1 = require("../forms/forms.module");
const customers_module_1 = require("../customers/customers.module");
let FormResponsesModule = class FormResponsesModule {
};
exports.FormResponsesModule = FormResponsesModule;
exports.FormResponsesModule = FormResponsesModule = __decorate([
    (0, common_1.Module)({
        providers: [form_responses_service_1.FormResponsesService],
        controllers: [form_responses_controller_1.FormResponsesController],
        imports: [customer_services_module_1.CustomerServicesModule, forms_module_1.FormsModule, customers_module_1.CustomersModule],
    })
], FormResponsesModule);
//# sourceMappingURL=form-responses.module.js.map
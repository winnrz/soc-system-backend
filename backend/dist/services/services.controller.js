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
exports.ServicesController = void 0;
const common_1 = require("@nestjs/common");
const decorators_1 = require("../auth/decorators");
const guards_1 = require("../auth/guards");
const services_service_1 = require("./services.service");
const dto_1 = require("./dto");
let ServicesController = class ServicesController {
    servicesService;
    constructor(servicesService) {
        this.servicesService = servicesService;
    }
    async createService(user, body) {
        if (user.role !== 'ADMIN') {
            throw new common_1.ForbiddenException('You do not have permission to create a service');
        }
        const service = await this.servicesService.createService(body, user);
        return {
            data: service,
            message: 'Service created successfully',
        };
    }
};
exports.ServicesController = ServicesController;
__decorate([
    (0, common_1.HttpCode)(201),
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(guards_1.JwtAuthGuard),
    __param(0, (0, decorators_1.GetUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, dto_1.ServicesDTO]),
    __metadata("design:returntype", Promise)
], ServicesController.prototype, "createService", null);
exports.ServicesController = ServicesController = __decorate([
    (0, common_1.Controller)('services'),
    __metadata("design:paramtypes", [services_service_1.ServicesService])
], ServicesController);
//# sourceMappingURL=services.controller.js.map
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
exports.VpnsController = void 0;
const common_1 = require("@nestjs/common");
const vpns_service_1 = require("./vpns.service");
const decorators_1 = require("../auth/decorators");
const guards_1 = require("../auth/guards");
const dto_1 = require("./dto");
let VpnsController = class VpnsController {
    vpnsService;
    constructor(vpnsService) {
        this.vpnsService = vpnsService;
    }
    async createVPN(body, user) {
        await this.vpnsService.createVpn(body, user);
        return {
            message: 'VPN created successfully',
        };
    }
    async fetchVPNs() {
        const data = await this.vpnsService.findAll();
        return {
            data,
            message: 'VPNs fetched successfully',
        };
    }
    async updateVPN(customerId, body, user) {
        const numericId = parseInt(customerId, 10);
        if (isNaN(numericId)) {
            throw new common_1.BadRequestException('Invalid vpn id');
        }
        await this.vpnsService.updateVpnStatus(body, user, numericId);
        return {
            message: 'VPN status updated successfully',
        };
    }
    async fetchAllVpns() {
        const data = await this.vpnsService.findAll();
        return {
            data,
            message: 'VPNs fetched successfully',
        };
    }
    async updateVPNContactsComments(customerId, body, user) {
        const numericId = parseInt(customerId, 10);
        if (isNaN(numericId)) {
            throw new common_1.BadRequestException('Invalid vpn id');
        }
        const { contacts, comments } = body;
        if ((contacts !== undefined && contacts.trim() === '') ||
            (comments !== undefined && comments.trim() === '')) {
            throw new common_1.BadRequestException('Contacts and comments must not be empty strings');
        }
        await this.vpnsService.updateVpnContactsComments(body, user, numericId);
        return {
            message: 'VPN contacts/comments updated successfully',
        };
    }
};
exports.VpnsController = VpnsController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(guards_1.JwtAuthGuard),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, decorators_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.NewVpnDto, Object]),
    __metadata("design:returntype", Promise)
], VpnsController.prototype, "createVPN", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(guards_1.JwtAuthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], VpnsController.prototype, "fetchVPNs", null);
__decorate([
    (0, common_1.Patch)(':id/status'),
    (0, common_1.UseGuards)(guards_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, decorators_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dto_1.UpdateVpnStatusDto, Object]),
    __metadata("design:returntype", Promise)
], VpnsController.prototype, "updateVPN", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(guards_1.JwtAuthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], VpnsController.prototype, "fetchAllVpns", null);
__decorate([
    (0, common_1.Patch)(':id/contacts-comments'),
    (0, common_1.UseGuards)(guards_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, decorators_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dto_1.UpdateVpnContactsCommentsDto, Object]),
    __metadata("design:returntype", Promise)
], VpnsController.prototype, "updateVPNContactsComments", null);
exports.VpnsController = VpnsController = __decorate([
    (0, common_1.Controller)('vpns'),
    __metadata("design:paramtypes", [vpns_service_1.VpnsService])
], VpnsController);
//# sourceMappingURL=vpns.controller.js.map
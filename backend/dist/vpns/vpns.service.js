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
exports.VpnsService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const prisma_service_1 = require("../prisma/prisma.service");
let VpnsService = class VpnsService {
    prismaService;
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async createVpn(body, user) {
        try {
            return await this.prismaService.vPN.create({
                data: {
                    name: body.vpnName,
                    peerIp: body.peerIp,
                    status: client_1.VPNStatus.ACTIVE,
                    adminId: user.userId,
                },
            });
        }
        catch (error) {
            console.error('Error creating VPN:', error);
            throw new Error('Failed to create VPN');
        }
    }
    async findAll() {
        try {
            return await this.prismaService.vPN.findMany({
                orderBy: {
                    id: 'asc',
                },
                include: {
                    admin: {
                        select: {
                            id: true,
                            firstName: true,
                            lastName: true,
                        },
                    },
                    updatedBy: {
                        select: {
                            firstName: true,
                            lastName: true,
                        },
                    },
                },
            });
        }
        catch (error) {
            console.error('Error fetching VPNs:', error);
            throw new Error('Failed to fetch VPNs');
        }
    }
    async updateVpnStatus(body, user, id) {
        try {
            const vpn = await this.prismaService.vPN.findUnique({
                where: { id },
            });
            if (!vpn) {
                throw new Error('VPN not found');
            }
            return await this.prismaService.vPN.update({
                where: { id },
                data: {
                    status: body.status,
                    updatedById: user.userId,
                },
            });
        }
        catch (error) {
            console.error('Error updating VPN:', error);
            throw new Error('Failed to update VPN');
        }
    }
    async updateVpnContactsComments(body, user, id) {
        const data = {};
        if (body.contacts !== undefined && body.contacts.trim() !== '') {
            data.contacts = body.contacts.trim();
        }
        if (body.comments !== undefined && body.comments.trim() !== '') {
            data.comments = body.comments.trim();
        }
        if (Object.keys(data).length === 0) {
            throw new common_1.BadRequestException('No valid contacts or comments provided for update.');
        }
        await this.prismaService.vPN.update({
            where: { id },
            data,
        });
    }
};
exports.VpnsService = VpnsService;
exports.VpnsService = VpnsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], VpnsService);
//# sourceMappingURL=vpns.service.js.map
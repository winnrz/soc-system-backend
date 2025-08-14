import { NewVpnDto, UpdateVpnContactsCommentsDto, UpdateVpnStatusDto } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CurrentUser } from 'src/auth/types';
export declare class VpnsService {
    private prismaService;
    constructor(prismaService: PrismaService);
    createVpn(body: NewVpnDto, user: CurrentUser): Promise<{
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        adminId: number;
        peerIp: string;
        status: import(".prisma/client").$Enums.VPNStatus;
        contacts: string | null;
        comments: string | null;
        updatedById: number | null;
    }>;
    findAll(): Promise<({
        admin: {
            firstName: string;
            lastName: string;
            id: number;
        };
        updatedBy: {
            firstName: string;
            lastName: string;
        } | null;
    } & {
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        adminId: number;
        peerIp: string;
        status: import(".prisma/client").$Enums.VPNStatus;
        contacts: string | null;
        comments: string | null;
        updatedById: number | null;
    })[]>;
    updateVpnStatus(body: UpdateVpnStatusDto, user: CurrentUser, id: number): Promise<{
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        adminId: number;
        peerIp: string;
        status: import(".prisma/client").$Enums.VPNStatus;
        contacts: string | null;
        comments: string | null;
        updatedById: number | null;
    }>;
    updateVpnContactsComments(body: UpdateVpnContactsCommentsDto, user: CurrentUser, id: number): Promise<void>;
}

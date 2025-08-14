import { VpnsService } from './vpns.service';
import { CurrentUser } from 'src/auth/types';
import { NewVpnDto, UpdateVpnContactsCommentsDto, UpdateVpnStatusDto } from './dto';
export declare class VpnsController {
    private vpnsService;
    constructor(vpnsService: VpnsService);
    createVPN(body: NewVpnDto, user: CurrentUser): Promise<{
        message: string;
    }>;
    fetchVPNs(): Promise<{
        data: ({
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
        })[];
        message: string;
    }>;
    updateVPN(customerId: string, body: UpdateVpnStatusDto, user: CurrentUser): Promise<{
        message: string;
    }>;
    fetchAllVpns(): Promise<{
        data: ({
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
        })[];
        message: string;
    }>;
    updateVPNContactsComments(customerId: string, body: UpdateVpnContactsCommentsDto, user: CurrentUser): Promise<{
        message: string;
    }>;
}

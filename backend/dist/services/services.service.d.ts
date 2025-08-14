import { PrismaService } from 'src/prisma/prisma.service';
import { ServicesDTO } from './dto';
import { CurrentUser } from 'src/auth/types';
import { FormsService } from 'src/forms/forms.service';
export declare class ServicesService {
    private prismaService;
    private formService;
    constructor(prismaService: PrismaService, formService: FormsService);
    createService(body: ServicesDTO, user: CurrentUser): Promise<{
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        adminId: number;
        formId: number;
    }>;
    getService(name: string): Promise<{
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        adminId: number;
        formId: number;
    }>;
}

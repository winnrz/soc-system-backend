import { PrismaService } from 'src/prisma/prisma.service';
import { FormDto } from './dto';
import { CurrentUser } from 'src/auth/types';
export declare class FormsService {
    private prisma;
    constructor(prisma: PrismaService);
    createForm(data: FormDto, user: CurrentUser): Promise<{
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        config: import("@prisma/client/runtime/library").JsonValue;
        createdById: number;
    }>;
    getForm(name: string): Promise<{
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        config: import("@prisma/client/runtime/library").JsonValue;
        createdById: number;
    }>;
}

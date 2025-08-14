import { PrismaService } from 'src/prisma/prisma.service';
export declare class CustomerServicesService {
    private prismaService;
    constructor(prismaService: PrismaService);
    getCustomerServices(id: number): Promise<{
        name: string | null;
        form: {
            name: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            config: import("@prisma/client/runtime/library").JsonValue;
            createdById: number;
        } | null;
        dataSource: {
            id: number | null;
            data: string | number | boolean | import("@prisma/client/runtime/library").JsonObject | import("@prisma/client/runtime/library").JsonArray;
        };
    }[]>;
    findOne(customerId: number): Promise<{
        id: number;
        assignedAt: Date;
        dataSourceId: number | null;
        serviceId: number;
        customerId: number;
    }>;
}

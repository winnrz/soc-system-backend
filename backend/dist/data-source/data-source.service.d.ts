import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class DataSourceService {
    private prismaService;
    constructor(prismaService: PrismaService);
    createDataSource(rows: any[]): Promise<{
        id: number;
        data: Prisma.JsonValue;
    }>;
    updateDataSource(id: number, dataSource: any): Promise<{
        id: number;
        data: Prisma.JsonValue;
    }>;
}

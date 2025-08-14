import { NewCustomerDto } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { ServicesService } from 'src/services/services.service';
import { DataSourceService } from 'src/data-source/data-source.service';
export declare class CustomersService {
    private servicesService;
    private prismaService;
    private dataSourceService;
    constructor(servicesService: ServicesService, prismaService: PrismaService, dataSourceService: DataSourceService);
    createCustomer(body: NewCustomerDto): Promise<{
        customerServices: ({
            service: {
                name: string;
                id: number;
                createdAt: Date;
                updatedAt: Date;
                adminId: number;
                formId: number;
            };
            dataSource: {
                id: number;
                data: import("@prisma/client/runtime/library").JsonValue;
            } | null;
        } & {
            id: number;
            assignedAt: Date;
            dataSourceId: number | null;
            serviceId: number;
            customerId: number;
        })[];
    } & {
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): Promise<{
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: number): Promise<{
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
}

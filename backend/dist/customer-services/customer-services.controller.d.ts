import { CustomerServicesService } from './customer-services.service';
export declare class CustomerServicesController {
    private customerServicesService;
    constructor(customerServicesService: CustomerServicesService);
    getCustomerServiceForms(id: string): Promise<{
        data: {
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
        }[];
        message: string;
    }>;
}

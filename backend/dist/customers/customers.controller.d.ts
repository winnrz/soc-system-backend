import { NewCustomerDto } from './dto';
import { CustomersService } from './customers.service';
export declare class CustomersController {
    private customersService;
    constructor(customersService: CustomersService);
    create(body: NewCustomerDto): Promise<{
        data: {
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
        };
        message: string;
    }>;
    fetch(): Promise<{
        data: {
            name: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
        }[];
        message: string;
    }>;
}

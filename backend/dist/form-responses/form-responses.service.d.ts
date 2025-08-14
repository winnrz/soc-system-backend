import { CustomerServicesService } from 'src/customer-services/customer-services.service';
import { CustomersService } from 'src/customers/customers.service';
import { FormsService } from 'src/forms/forms.service';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class FormResponsesService {
    private prismaService;
    private customersService;
    private formsService;
    private customerServicesService;
    constructor(prismaService: PrismaService, customersService: CustomersService, formsService: FormsService, customerServicesService: CustomerServicesService);
    createFormResponse(name: string, response: any[], userId: number, customerId: number): Promise<{
        message: string;
    }>;
    getAll(): Promise<({
        customerService: {
            customer: {
                name: string;
            };
        };
        form: {
            name: string;
        };
        filledBy: {
            firstName: string;
            lastName: string;
        } | null;
    } & {
        id: number;
        updatedAt: Date;
        formId: number;
        filledAt: Date;
        filledById: number | null;
        customerServiceId: number;
        responseData: import("@prisma/client/runtime/library").JsonValue;
    })[]>;
    getOne(formResponseId: number): Promise<{
        customerService: {
            customer: {
                name: string;
            };
        };
        form: {
            name: string;
        };
        filledBy: {
            firstName: string;
            lastName: string;
        } | null;
    } & {
        id: number;
        updatedAt: Date;
        formId: number;
        filledAt: Date;
        filledById: number | null;
        customerServiceId: number;
        responseData: import("@prisma/client/runtime/library").JsonValue;
    }>;
}

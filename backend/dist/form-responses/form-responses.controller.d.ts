import { FormResponsesService } from './form-responses.service';
import { CreateFormResponseDto } from './dto';
import { CurrentUser } from 'src/auth/types';
export declare class FormResponsesController {
    private formResponsesService;
    constructor(formResponsesService: FormResponsesService);
    createForm(body: CreateFormResponseDto, user: CurrentUser, customerId: string): Promise<{
        message: string;
    }>;
    fetchForms(): Promise<{
        data: ({
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
        })[];
        message: string;
    }>;
    fetchForm(customerId: string): Promise<{
        data: {
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
        };
        message: string;
    }>;
}

import { FormDto } from './dto';
import { CurrentUser } from 'src/auth/types';
import { FormsService } from './forms.service';
export declare class FormsController {
    private readonly formsService;
    constructor(formsService: FormsService);
    createForm(body: FormDto, user: CurrentUser): Promise<{
        data: {
            name: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            config: import("@prisma/client/runtime/library").JsonValue;
            createdById: number;
        };
        message: string;
    }>;
}

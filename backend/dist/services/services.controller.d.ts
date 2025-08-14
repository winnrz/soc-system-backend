import { CurrentUser } from 'src/auth/types';
import { ServicesService } from './services.service';
import { ServicesDTO } from './dto';
export declare class ServicesController {
    private servicesService;
    constructor(servicesService: ServicesService);
    createService(user: CurrentUser, body: ServicesDTO): Promise<{
        data: {
            name: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            adminId: number;
            formId: number;
        };
        message: string;
    }>;
}

import { CurrentUser } from 'src/auth/types';
import { UsersService } from './users.service';
export declare class UsersController {
    private userService;
    constructor(userService: UsersService);
    function(user: CurrentUser): Promise<{
        data: {
            role: import(".prisma/client").$Enums.Role;
            firstName: string;
            lastName: string;
            email: string;
            password: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            refreshToken: string | null;
            deletedAt: Date | null;
        };
        message: string;
    }>;
}

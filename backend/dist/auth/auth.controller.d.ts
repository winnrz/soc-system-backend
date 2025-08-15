import { User } from '@prisma/client';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto';
import { CurrentUser } from './types';
import { Platform } from 'src/common/types';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    createUser(dto: CreateUserDto): Promise<Omit<User, 'password'> | {
        message: string;
    }>;
    login(user: User, res: Platform): Promise<{
        data: {
            id: number;
            role: import(".prisma/client").$Enums.Role;
            firstName: string;
            lastName: string;
            email: string;
            createdAt: Date;
            updatedAt: Date;
            refreshToken: string | null;
            deletedAt: Date | null;
        };
        message: string;
    }>;
    refresh(user: CurrentUser, req: any, res: Platform): Promise<{
        message: string;
    }>;
    logout(user: CurrentUser, res: Platform): Promise<{
        message: string;
    }>;
}

import { Role } from '@prisma/client';
export declare class CreateUserDto {
    role: Role;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

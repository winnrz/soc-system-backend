import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    findOne(email: string): Promise<User>;
    updateRefreshToken(userId: number, refreshToken: string | null): Promise<void>;
    me(email: string): Promise<Omit<User, 'password'>>;
}

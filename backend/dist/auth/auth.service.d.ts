import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { User } from '@prisma/client';
export declare class AuthService {
    private prismaService;
    private usersService;
    private jwtService;
    private configService;
    constructor(prismaService: PrismaService, usersService: UsersService, jwtService: JwtService, configService: ConfigService);
    createUser(dto: CreateUserDto): Promise<Omit<User, 'password'>>;
    validateUser(email: string, password: string): Promise<Omit<User, 'password'>>;
    login(user: Omit<User, 'password'>): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    refreshToken(email: string, refreshToken: string): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    logout(userId: number): Promise<void>;
}

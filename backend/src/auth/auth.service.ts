import {
  ConflictException,
  ForbiddenException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto';
import * as argon2 from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { User } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(
    private prismaService: PrismaService,
    private usersService: UsersService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async createUser(dto: CreateUserDto): Promise<Omit<User, 'password'>> {
    // Hash the user's password
    const hash = await argon2.hash(dto.password);

    // Save the new suer to the db
    try {
      const user = await this.prismaService.user.create({
        data: {
          ...dto,
          password: hash,
        },
      });

      //   Return the user to the client without the password
      const { password, ...result } = user;

      return result;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ConflictException('A user with this email already exists');
        }
        throw new InternalServerErrorException('Something went wrong');
      }
    }

    throw new InternalServerErrorException('Something went wrong');
  }

  async validateUser(
    email: string,
    password: string,
  ): Promise<Omit<User, 'password'>> {
    try {
      const user = await this.usersService.findOne(email);

      // Verify password
      const passMatch = await argon2.verify(user.password, password);

      if (!passMatch) throw new ForbiddenException('Incorrect credentials');

      const { password: _password, ...safeUser } = user;
      
      return safeUser;
    } catch (error) {
      // Prisma error when user not found, or other errors
      if (
        error instanceof PrismaClientKnownRequestError &&
        error.code === 'P2025'
      ) {
        // Invalid credentials
        throw new ForbiddenException('Incorrect credentials');
      }
      if (error instanceof NotFoundException) {
        // User not found
        throw new ForbiddenException('Incorrect credentials');
      }
      throw new InternalServerErrorException('Something went wrong');
    }
  }

  async login(
    user: Omit<User, 'password'>,
  ): Promise<{ accessToken: string; refreshToken: string }> {
    const payload = { email: user.email, sub: user.id, role: user.role };

    // Generate an access token
    const accessToken = this.jwtService.sign(payload, {
      secret: this.configService.get<string>('JWT_SECRET'),
      expiresIn: '15m',
    });

    // Generate a refresh token
    const refreshToken = this.jwtService.sign(payload, {
      secret: this.configService.get<string>('JWT_REFRESH_SECRET'),
      expiresIn: '7d',
    });

    // Store hashed refresh token in DB
    await this.usersService.updateRefreshToken(user.id, refreshToken);

    return {
      accessToken,
      refreshToken,
    };
  }

  async refreshToken(
    email: string,
    refreshToken: string,
  ): Promise<{ accessToken: string; refreshToken: string }> {
    try {
      const user = await this.usersService.findOne(email);

      // If the user or the refresh hash doesn't exist
      if (!user || !user.refreshToken)
        throw new ForbiddenException('Access denied');

      // Compare user refresh token with stored hashed token
      const isValid = await argon2.verify(user.refreshToken, refreshToken);
      if (!isValid) throw new ForbiddenException('Invalid refresh token');

      return this.login(user);
    } catch (err) {
      throw new ForbiddenException('Invalid refresh token');
    }
  }

  async logout(userId: number) {
    // Remove the stored hashed refresh token from DB
    await this.usersService.updateRefreshToken(userId, null);
  }
}

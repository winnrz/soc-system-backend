import {
  Body,
  Controller,
  Post,
  UseGuards,
  Request,
  Res,
  HttpCode,
  InternalServerErrorException,
  ForbiddenException,
} from '@nestjs/common';

import { User } from '@prisma/client';

import { AuthService } from './auth.service';
import { CreateUserDto } from './dto';
import { JwtAuthGuard, LocalAuthGuard } from './guards';
import { removeCookie, setCookie } from 'src/auth/utils/helpers';
import { JwtRefreshGuard } from './guards/jwt-refresh-auth.guard';
import { CurrentUser } from './types';
import { GetUser } from './decorators';
import { Platform } from 'src/common/types';
import { accessTokenOptions, refreshTokenOptions } from './utils/constants';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(201)
  @Post('create-user')
  async createUser(
    @Body() dto: CreateUserDto,
  ): Promise<Omit<User, 'password'> | { message: string }> {
    // Password validation

    return this.authService.createUser(dto);
  }

  @HttpCode(200)
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(
    @GetUser() user: User,
    @Res({ passthrough: true }) res: Platform,
  ) {
    const { accessToken, refreshToken } = await this.authService.login(user);

    // Compose a context object that works for setCookie helper
    const ctx = { res, reply: res };

    // Return the access and refresh tokens in the response
    setCookie(ctx, 'access_token', accessToken, accessTokenOptions);

    setCookie(ctx, 'refresh_token', refreshToken, refreshTokenOptions);

    // Return the user data without the password
    const { password, ...userWithoutPassword } = user;
    return {
      data: userWithoutPassword,
      message: 'Login successful',
    };
  }

  @HttpCode(200)
  @UseGuards(JwtRefreshGuard)
  @Post('refresh-token')
  async refresh(
    @GetUser() user: CurrentUser,
    @Request() req: any,
    @Res({ passthrough: true }) res: Platform,
  ) {
    const { accessToken, refreshToken } = await this.authService.refreshToken(
      user.email,
      req.cookies?.['refresh_token'],
    );

    // Compose a context object that works for setCookie helper
    const ctx = { res, reply: res };

    // Return the access and refresh tokens in the response
    setCookie(ctx, 'access_token', accessToken, accessTokenOptions);

    setCookie(ctx, 'refresh_token', refreshToken, refreshTokenOptions);

    return { message: 'Token refreshed successfully' };
  }

  @HttpCode(200)
  @UseGuards(JwtAuthGuard)
  @Post('logout')
  async logout(
    @GetUser() user: CurrentUser,
    @Res({ passthrough: true }) res: Platform,
  ) {
    const ctx = { res, reply: res };

    removeCookie(ctx, 'access_token');
    removeCookie(ctx, 'refresh_token');

    await this.authService.logout(user.userId);
    return { message: 'Logged out successfully' };
  }
}

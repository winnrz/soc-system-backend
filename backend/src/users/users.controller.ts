import { Controller, Get, UseGuards } from '@nestjs/common';
import { GetUser } from 'src/auth/decorators';
import { JwtAuthGuard } from 'src/auth/guards';
import { CurrentUser } from 'src/auth/types';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Get('me')
  async function(@GetUser() user: CurrentUser) {
    const userProfile = await this.userService.findOne(user.email);

    return {
      data: userProfile,
      message: 'Login successful',
    };
  }
}

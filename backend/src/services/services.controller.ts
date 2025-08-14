import {
  Body,
  Controller,
  ForbiddenException,
  HttpCode,
  Post,
  UseGuards,
} from '@nestjs/common';
import { GetUser } from 'src/auth/decorators';
import { JwtAuthGuard } from 'src/auth/guards';
import { CurrentUser } from 'src/auth/types';
import { ServicesService } from './services.service';
import { ServicesDTO } from './dto';

@Controller('services')
export class ServicesController {
  constructor(private servicesService: ServicesService) {}

  @HttpCode(201)
  @Post()
  @UseGuards(JwtAuthGuard)
  async createService(@GetUser() user: CurrentUser, @Body() body: ServicesDTO) {
    if (user.role !== 'ADMIN') {
      throw new ForbiddenException(
        'You do not have permission to create a service',
      );
    }

    const service = await this.servicesService.createService(body, user);

    return {
      data: service,
      message: 'Service created successfully',
    };
  }

  
}

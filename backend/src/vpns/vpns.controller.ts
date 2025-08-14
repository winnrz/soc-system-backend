import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { VpnsService } from './vpns.service';
import { GetUser } from 'src/auth/decorators';
import { CurrentUser } from 'src/auth/types';
import { JwtAuthGuard } from 'src/auth/guards';
import { NewVpnDto, UpdateVpnContactsCommentsDto, UpdateVpnStatusDto } from './dto';

@Controller('vpns')
export class VpnsController {
  constructor(private vpnsService: VpnsService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  async createVPN(@Body() body: NewVpnDto, @GetUser() user: CurrentUser) {
    await this.vpnsService.createVpn(body, user);

    return {
      message: 'VPN created successfully',
    };
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  async fetchVPNs() {
    const data = await this.vpnsService.findAll();

    return {
      data,
      message: 'VPNs fetched successfully',
    };
  }

  @Patch(':id/status')
  @UseGuards(JwtAuthGuard)
  async updateVPN(
    @Param('id') customerId: string,
    @Body() body: UpdateVpnStatusDto,
    @GetUser() user: CurrentUser,
  ) {
    const numericId = parseInt(customerId, 10);

    if (isNaN(numericId)) {
      throw new BadRequestException('Invalid vpn id');
    }

    await this.vpnsService.updateVpnStatus(body, user, numericId);

    return {
      message: 'VPN status updated successfully',
    };
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  async fetchAllVpns() {
    const data = await this.vpnsService.findAll();

    return {
      data,
      message: 'VPNs fetched successfully',
    };
  }

  @Patch(':id/contacts-comments')
  @UseGuards(JwtAuthGuard)
  async updateVPNContactsComments(
    @Param('id') customerId: string,
    @Body() body: UpdateVpnContactsCommentsDto,
    @GetUser() user: CurrentUser,
  ) {
    const numericId = parseInt(customerId, 10);

    if (isNaN(numericId)) {
      throw new BadRequestException('Invalid vpn id');
    }

    const { contacts, comments } = body;

    if (
      (contacts !== undefined && contacts.trim() === '') ||
      (comments !== undefined && comments.trim() === '')
    ) {
      throw new BadRequestException(
        'Contacts and comments must not be empty strings',
      );
    }

    await this.vpnsService.updateVpnContactsComments(body, user, numericId);

    return {
      message: 'VPN contacts/comments updated successfully',
    };
  }
}

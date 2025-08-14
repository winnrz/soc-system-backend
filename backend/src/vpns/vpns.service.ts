import { BadRequestException, Injectable } from '@nestjs/common';
import { NewVpnDto, UpdateVpnContactsCommentsDto, UpdateVpnStatusDto } from './dto';
import { VPN, VPNStatus } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CurrentUser } from 'src/auth/types';

@Injectable()
export class VpnsService {
  constructor(private prismaService: PrismaService) {}

  async createVpn(body: NewVpnDto, user: CurrentUser) {
    try {
      return await this.prismaService.vPN.create({
        data: {
          name: body.vpnName,
          peerIp: body.peerIp,
          status: VPNStatus.ACTIVE,
          adminId: user.userId,
        },
      });
    } catch (error) {
      console.error('Error creating VPN:', error);
      throw new Error('Failed to create VPN');
    }
  }

  async findAll() {
    try {
      return await this.prismaService.vPN.findMany({
        orderBy: {
          id: 'asc',
        },
        include: {
          admin: {
            select: {
              id: true,
              firstName: true,
              lastName: true,
            },
          },
          updatedBy: {
            select: {
              firstName: true,
              lastName: true,
            },
          },
        },
      });
    } catch (error) {
      console.error('Error fetching VPNs:', error);
      throw new Error('Failed to fetch VPNs');
    }
  }

  async updateVpnStatus(
    body: UpdateVpnStatusDto,
    user: CurrentUser,
    id: number,
  ) {
    try {
      const vpn = await this.prismaService.vPN.findUnique({
        where: { id },
      });

      if (!vpn) {
        throw new Error('VPN not found');
      }

      return await this.prismaService.vPN.update({
        where: { id },
        data: {
          status: body.status,
          updatedById: user.userId,
        },
      });
    } catch (error) {
      console.error('Error updating VPN:', error);
      throw new Error('Failed to update VPN');
    }
  }

  async updateVpnContactsComments(
    body: UpdateVpnContactsCommentsDto,
    user: CurrentUser,
    id: number,
  ) {
    const data: Partial<Pick<VPN, 'contacts' | 'comments'>> = {};

    if (body.contacts !== undefined && body.contacts.trim() !== '') {
      data.contacts = body.contacts.trim();
    }

    if (body.comments !== undefined && body.comments.trim() !== '') {
      data.comments = body.comments.trim();
    }

    if (Object.keys(data).length === 0) {
      throw new BadRequestException(
        'No valid contacts or comments provided for update.',
      );
    }

    await this.prismaService.vPN.update({
      where: { id },
      data,
    });
  }
}


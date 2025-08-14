import { VPNStatus } from '@prisma/client';
import { IsEnum, IsString } from 'class-validator';

export class UpdateVpnStatusDto {
  @IsString()
  @IsEnum(VPNStatus)
  status: VPNStatus;
}

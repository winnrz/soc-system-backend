import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class NewVpnDto {
  @IsString()
  @IsNotEmpty()
  vpnName: string;

  @IsString()
  @IsNotEmpty()
  peerIp: string;
}

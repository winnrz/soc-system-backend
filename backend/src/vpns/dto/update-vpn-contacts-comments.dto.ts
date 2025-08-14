import { IsOptional, IsString } from 'class-validator';

export class UpdateVpnContactsCommentsDto {
  @IsOptional()
  @IsString()
  contacts?: string;

  @IsOptional()
  @IsString()
  comments?: string;
}

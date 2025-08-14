import { IsArray, IsNotEmpty, IsString } from 'class-validator';

export class CreateFormResponseDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsArray()
  response: any[]; 
}

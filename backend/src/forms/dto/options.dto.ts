import { IsString } from "class-validator";

export class OptionsDto {
  @IsString()
  label: string;

  @IsString()
  value: string;
}
  
import { Type } from "class-transformer";
import { IsArray, IsString, ValidateNested } from "class-validator";
import { SectionDto } from './index';

export class FormDto {
  @IsString()
  name: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SectionDto)
  config: SectionDto[];
}

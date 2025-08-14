import { Type } from "class-transformer";
import { IsArray, IsString, ValidateNested } from "class-validator";
import { FieldConfig } from './index';


export class SectionDto {
  @IsString()
  key: string;

  @IsString()
  question: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => FieldConfig)
  fields: FieldConfig[];
}

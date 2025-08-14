import { Type } from "class-transformer";
import { IsArray, IsBoolean, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, ValidateNested } from "class-validator";
import { OptionsDto } from "./index";

export enum FormType {
  RADIO = 'radio',
  TEXTAREA = 'textarea',
  INPUT = 'input',
  TEXT = 'text',
  DATE = 'date'
}

export class FieldConfig {
  @IsEnum(FormType)
  @IsNotEmpty()
  type: FormType;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  label: string;

  @IsOptional()
  @IsBoolean()
  required?: boolean;

  @IsOptional()
  @IsString()
  placeholder?: string;

  @IsOptional()
  @IsNumber()
  rows?: number;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => OptionsDto)
  options?: OptionsDto[];

  @IsOptional()
  @IsBoolean()
  showOtherText?: boolean;

  @IsOptional()
  @IsString()
  otherTextLabel?: string;
}

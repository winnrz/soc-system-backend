import { IsArray, IsNotEmpty, IsString } from "class-validator"
import { DataSourceRow } from "src/services/types";
import { ServiceType } from "src/services/types/service.type"


export class NewCustomerDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsArray()
  @IsNotEmpty()
  services: ServiceType[];

  @IsArray()
  @IsNotEmpty()
  dataSource: DataSourceRow [];
}
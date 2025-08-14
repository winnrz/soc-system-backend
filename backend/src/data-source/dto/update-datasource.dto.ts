import { IsArray, IsNotEmpty } from 'class-validator';
import { DataSourceRow } from 'src/services/types';

export class updateDataSourceDto {
  @IsArray()
  @IsNotEmpty()
  dataSource: DataSourceRow[];
}

import {
  BadRequestException,
  Body,
  Controller,
  Param,
  Put,
} from '@nestjs/common';
import { DataSourceService } from './data-source.service';

@Controller('data-source')
export class DataSourceController {
  constructor(private dataSourceService: DataSourceService) {}

  @Put(':id')
  async updateDataSource(
    @Param('id') id: string,
    @Body() updateDataSourceDto: any,
  ) {
    const numericId = parseInt(id, 10);

    if (isNaN(numericId)) {
      throw new BadRequestException('Invalid data source ID');
    }

    const data = await this.dataSourceService.updateDataSource(
      numericId,
      updateDataSourceDto.dataSource,
    );

    return {
      message: `Data source with ID ${id} updated successfully`,
    };
  }
}

import { Module } from '@nestjs/common';
import { DataSourceService } from './data-source.service';
import { DataSourceController } from './data-source.controller';

@Module({
  providers: [DataSourceService],
  controllers: [DataSourceController]
})
export class DataSourceModule {}

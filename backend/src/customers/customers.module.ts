import { Module } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CustomersController } from './customers.controller';
import { ServicesModule } from 'src/services/services.module';
import { PrismaModule } from 'src/prisma/prisma.module';
import { DataSourceService } from 'src/data-source/data-source.service';

@Module({
  imports: [ServicesModule, PrismaModule],
  providers: [CustomersService, DataSourceService],
  controllers: [CustomersController],
  exports: [CustomersService],
})
export class CustomersModule {}

import { Module } from '@nestjs/common';
import { CustomerServicesController } from './customer-services.controller';
import { CustomerServicesService } from './customer-services.service';

@Module({
  controllers: [CustomerServicesController],
  providers: [CustomerServicesService],
  exports: [CustomerServicesService]
})
export class CustomerServicesModule {}

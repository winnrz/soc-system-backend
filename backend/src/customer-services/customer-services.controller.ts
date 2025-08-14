import { BadRequestException, Controller, Get, Param } from '@nestjs/common';
import { CustomerServicesService } from './customer-services.service';

@Controller('customer-services')
export class CustomerServicesController {
  constructor(private customerServicesService: CustomerServicesService) {}

  @Get(':id')
  async getCustomerServiceForms(@Param('id') id: string) {
    const numericId = parseInt(id, 10);

    if (isNaN(numericId)) {
      throw new BadRequestException('Invalid customer ID');
    }

    const data =
      await this.customerServicesService.getCustomerServices(numericId);

    return {
      data,
      message: 'Customer service forms fetched successfully',
    };
  }
}

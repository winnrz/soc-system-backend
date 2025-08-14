import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards';
import { NewCustomerDto } from './dto';
import { CustomersService } from './customers.service';

@Controller('customers')
export class CustomersController {
  constructor(private customersService: CustomersService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() body: NewCustomerDto) {
    const customer = await this.customersService.createCustomer(body);

    return {
      data: customer,
      message: 'Customer created successfully',
    };
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async fetch() {
    const data = await this.customersService.findAll();

    return {
      data,
      message: 'Customers fetched successfully',
    };
  }
}

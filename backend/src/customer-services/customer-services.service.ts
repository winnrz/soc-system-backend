import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CustomerServicesService {
  constructor(private prismaService: PrismaService) {}

  async getCustomerServices(id: number) {
    try {
      const customerServices =
        await this.prismaService.customerService.findMany({
          where: {
            customerId: id,
          },
          select: {
            service: {
              select: {
                name: true,
                form: true,
              },
            },
            dataSource: {
              select: {
                id: true,
                data: true,
              },
            },
          },
        });

      const transformedCustomerServices = customerServices.map(
        ({ service = {}, dataSource = {} }) => ({
          name: service?.name ?? null,
          form: service?.form ?? null,
          dataSource: {
            id: dataSource?.id ?? null,
            data: dataSource?.data ?? [],
          },
        }),
      );

      return transformedCustomerServices;
    } catch (error) {
      console.error('Failed to fetch customer service forms:', error);
      throw new Error('Failed to fetch customers');
    }
  }

  async findOne(customerId: number) {
    try {
      return await this.prismaService.customerService.findFirstOrThrow({
        where: {
          customerId,
        },
      });
    } catch (error) {
      if (
        error instanceof PrismaClientKnownRequestError &&
        error.code === 'P2025'
      ) {
        throw new NotFoundException('Customer service not found');
      }
      throw error;
    }
  }
}

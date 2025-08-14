import { ConflictException, Injectable, NotFoundException, Post } from '@nestjs/common';
import { NewCustomerDto } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { ServicesService } from 'src/services/services.service';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { DataSourceService } from 'src/data-source/data-source.service';

@Injectable()
export class CustomersService {
  constructor(
    private servicesService: ServicesService,
    private prismaService: PrismaService,
    private dataSourceService: DataSourceService,
  ) {}

 async createCustomer(body: NewCustomerDto) {
    const { name, services, dataSource } = body;

    // Validate services
    const serviceEntities = await Promise.all(
      services.map(async (serviceName) => {
        try {
          return await this.servicesService.getService(serviceName);
        } catch (error) {
          if (error instanceof NotFoundException) {
            throw new NotFoundException(`Service (${serviceName}) not found`);
          }
          throw error;
        }
      }),
    );

    const customerServicePayload: any[] = [];

    for (const service of serviceEntities) {
      if (
        service.name.toLowerCase() === 'alienvault' &&
        dataSource.length > 0
      ) {
        const ds = await this.dataSourceService.createDataSource(dataSource);

        customerServicePayload.push({
          serviceId: service.id,
          dataSourceId: ds.id,
        });
      } else {
        customerServicePayload.push({
          serviceId: service.id,
        });
      }
    }

    try {
      const customer = await this.prismaService.customer.create({
        data: {
          name,
          customerServices: {
            create: customerServicePayload,
          },
        },
        include: {
          customerServices: {
            include: {
              service: true,
              dataSource: true,
            },
          },
        },
      });

      return customer;
    } catch (error) {
      if (
        error instanceof PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        throw new ConflictException('Customer with this name already exists');
      }
      throw error;
    }
  }

  async findAll() {
    try {
      return await this.prismaService.customer.findMany();
    } catch (error) {
      console.error('Failed to fetch customers:', error);
      throw new Error('Failed to fetch customers.');
    }
  }

  async findOne(id: number) {
    try {
      return await this.prismaService.customer.findUniqueOrThrow({
        where: {
          id: id,
        },
      });
    } catch (error: any) {
      if (
        error instanceof PrismaClientKnownRequestError &&
        error.code === 'P2025'
      ) {
        // Customer not found
        throw new NotFoundException('Customer not found');
      }
      throw error;
    }
  }
}

import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { CustomerServicesService } from 'src/customer-services/customer-services.service';
import { CustomersService } from 'src/customers/customers.service';
import { FormsService } from 'src/forms/forms.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FormResponsesService {
  constructor(
    private prismaService: PrismaService,
    private customersService: CustomersService,
    private formsService: FormsService,
    private customerServicesService: CustomerServicesService,
  ) {}

  async createFormResponse(
    name: string,
    response: any[],
    userId: number,
    customerId: number,
  ) {
    try {
      // Confirm if the form exists
      const form = await this.formsService.getForm(name);

      // Confirm if the customer exists
      const customer = await this.customersService.findOne(customerId);

      // Confirm if the customer service exists
      const customerService =
        await this.customerServicesService.findOne(customerId);

      // Create the response
      await this.prismaService.formResponse.create({
        data: {
          filledById: userId,
          customerServiceId: customerService.id,
          formId: form.id,
          responseData: response,
        },
      });

      return { message: 'Form response submitted successfully' };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }

      // Unexpected issues
      console.error('Failed to create form response:', error);
      throw new InternalServerErrorException('Failed to create form response');
    }
  }

  async getAll() {
    try {
      return await this.prismaService.formResponse.findMany({
        include: {
          form: {
            select: {
              name: true,
            },
          },
          customerService: {
            select: {
              customer: {
                select: {
                  name: true,
                },
              },
            },
          },
          filledBy: {
            select: {
              firstName: true,
              lastName: true,
            },
          },
        },
        orderBy: {
          filledAt: 'desc',
        },
      });
    } catch (error) {
      console.error('Failed to fetch form responses:', error);
      throw new Error('Failed to fetch form responses.');
    }
  }

  async getOne(formResponseId: number) {
    try {
      return await this.prismaService.formResponse.findUniqueOrThrow({
        where: {
          id: formResponseId,
        },
        include: {
          form: {
            select: {
              name: true,
            },
          },
          customerService: {
            select: {
              customer: {
                select: {
                  name: true,
                },
              },
            },
          },
          filledBy: {
            select: {
              firstName: true,
              lastName: true,
            },
          },
        },
      });
    } catch (error: any) {
      if (
        error instanceof PrismaClientKnownRequestError &&
        error.code === 'P2025'
      ) {
        throw new NotFoundException('Form response not found');
      }
      throw error;
    }
  }
}

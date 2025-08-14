import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ServicesDTO } from './dto';
import { CurrentUser } from 'src/auth/types';
import { FormsService } from 'src/forms/forms.service';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Injectable()
export class ServicesService {
  constructor(
    private prismaService: PrismaService,
    private formService: FormsService,
  ) {}

  async createService(body: ServicesDTO, user: CurrentUser) {
    const { userId } = user;
    const formName = body.name;

    const form = await this.formService.getForm(formName);

    try {
      return await this.prismaService.service.create({
        data: {
          name: body.name,
          adminId: userId,
          formId: form.id,
        },
      });
    } catch (error) {
      if (
        error instanceof PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        throw new ConflictException('A service with this name already exists.');
      }
      throw new InternalServerErrorException(
        'An error occurred while creating the service.',
      );
    }
  }

  async getService(name: string) {
    try {
      return await this.prismaService.service.findFirstOrThrow({
        where: {
          name: name,
        },
      });
    } catch (error: any) {
      if (
        error instanceof PrismaClientKnownRequestError &&
        error.code === 'P2025'
      ) {
        // Service not found
        throw new NotFoundException(`Service (${name}) not found`);
      }
      throw error;
    }
  }
}

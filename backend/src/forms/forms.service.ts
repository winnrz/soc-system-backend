import { ConflictException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { FormDto } from './dto';
import { CurrentUser } from 'src/auth/types';
import { instanceToPlain } from 'class-transformer';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Injectable()
export class FormsService {
  constructor(private prisma: PrismaService) {}

  async createForm(data: FormDto, user: CurrentUser) {
    const { userId } = user;
    const plainConfig = instanceToPlain(data.config);

    try {
      const form = await this.prisma.form.create({
        data: {
          name: data.name.toLowerCase(),
          config: plainConfig,
          createdById: userId,
        },
      });

      return form;
    } catch (error) {
      if (
        error instanceof PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        throw new ConflictException('A form with this name already exists.');
      }

      throw new InternalServerErrorException(
        'Something went wrong while creating the form.',
      );
    }
  }

  async getForm(name: string) {
    try {
      return await this.prisma.form.findFirstOrThrow({
        where: {
          name: name,
        },
      });
    } catch (error: any) {
      if (
        error instanceof PrismaClientKnownRequestError &&
        error.code === 'P2025'
      ) {
        // Form not found
        throw new NotFoundException('Form not found');
      }
      throw error;
    }
  }
}

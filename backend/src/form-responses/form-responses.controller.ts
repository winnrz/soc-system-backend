import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards';
import { FormResponsesService } from './form-responses.service';
import { CreateFormResponseDto } from './dto';
import { GetUser } from 'src/auth/decorators';
import { CurrentUser } from 'src/auth/types';

@Controller('form-responses')
export class FormResponsesController {
  constructor(private formResponsesService: FormResponsesService) {}

  @Post(':id')
  @UseGuards(JwtAuthGuard)
  async createForm(
    @Body() body: CreateFormResponseDto,
    @GetUser() user: CurrentUser,
    @Param('id') customerId: string,
  ) {
    const numericId = parseInt(customerId, 10);

    console.log('This is body', body);

    if (isNaN(numericId)) {
      throw new BadRequestException('Invalid customer ID');
    }

    return await this.formResponsesService.createFormResponse(
      body.name,
      body.response,
      user.userId,
      numericId,
    );
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  async fetchForms() {
    const data = await this.formResponsesService.getAll();

    return {
      data,
      message: 'Form responses fetched successfully',
    };
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async fetchForm(@Param('id') customerId: string) {
    const numericId = parseInt(customerId, 10);

    if (isNaN(numericId)) {
      throw new BadRequestException('Invalid form response id');
    }

    const data = await this.formResponsesService.getOne(numericId);

    return {
      data,
      message: 'Form response fetched successfully',
    };
  }
}

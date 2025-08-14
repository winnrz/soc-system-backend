import { Body, Controller, Get, HttpCode, Post, UseGuards } from '@nestjs/common';
import { FormDto } from './dto';
import { JwtAuthGuard } from 'src/auth/guards';
import { GetUser } from 'src/auth/decorators';
import { CurrentUser } from 'src/auth/types';
import { FormsService } from './forms.service';

@Controller('forms')
export class FormsController {
  constructor(private readonly formsService: FormsService) {}

  @UseGuards(JwtAuthGuard)
  @HttpCode(201)
  @Post()
  async createForm(@Body() body: FormDto, @GetUser() user: CurrentUser) {
    const form = await this.formsService.createForm(body, user);

    return { data: form, message: 'Form created successfully' };
  }


}

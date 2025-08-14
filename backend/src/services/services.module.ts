import { Module } from '@nestjs/common';
import { ServicesService } from './services.service';
import { ServicesController } from './services.controller';
import { FormsModule } from 'src/forms/forms.module';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [FormsModule, PrismaModule],
  providers: [ServicesService],
  controllers: [ServicesController],
  exports: [ServicesService]
})
export class ServicesModule {}

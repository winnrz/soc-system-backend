import { Module } from '@nestjs/common';
import { FormResponsesService } from './form-responses.service';
import { FormResponsesController } from './form-responses.controller';
import { CustomerServicesModule } from 'src/customer-services/customer-services.module';
import { FormsModule } from 'src/forms/forms.module';
import { CustomersModule } from 'src/customers/customers.module';

@Module({
  providers: [FormResponsesService],
  controllers: [FormResponsesController],
  imports: [CustomerServicesModule, FormsModule, CustomersModule],
})
export class FormResponsesModule {}

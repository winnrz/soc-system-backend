import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { CustomersModule } from './customers/customers.module';
import { ServicesModule } from './services/services.module';
import { FormsModule } from './forms/forms.module';
import { CustomerServicesService } from './customer-services/customer-services.service';
import { CustomerServicesModule } from './customer-services/customer-services.module';
import { FormResponsesModule } from './form-responses/form-responses.module';
import { VpnsModule } from './vpns/vpns.module';
import { DataSourceModule } from './data-source/data-source.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    AuthModule,
    UsersModule,
    CustomersModule,
    ServicesModule,
    FormsModule,
    CustomerServicesModule,
    FormResponsesModule,
    VpnsModule,
    DataSourceModule,
  ],
  providers: [CustomerServicesService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { VpnsService } from './vpns.service';
import { VpnsController } from './vpns.controller';

@Module({
  providers: [VpnsService],
  controllers: [VpnsController],
  imports: [],
})
export class VpnsModule {}

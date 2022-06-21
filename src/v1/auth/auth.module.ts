import { Module } from '@nestjs/common';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

import { DbModule } from '../db/db.module';
import { ServiceModule } from 'src/services.module';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [DbModule, ServiceModule],
})
export class AuthModule {}

import { Module } from '@nestjs/common';

import { v1Module } from './v1/v1.module';

@Module({
  imports: [
    v1Module,
  ],
})
export class AppModule {}

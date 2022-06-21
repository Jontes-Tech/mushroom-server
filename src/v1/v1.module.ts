import { Module } from '@nestjs/common';
import { RouterModule, Routes } from 'nest-router';

import { HomeController } from './home.controller';

import { DbModule } from './db/db.module';

import { AuthModule } from './auth/auth.module';
import { CronjobModule } from './cronjob/cronjob.module';

const routes: Routes = [
  {
    path: '/v1/:prid/',
    children: [
      {
        path: 'auth',
        module: AuthModule,
      },
      {
        path: 'cronjobs',
        module: CronjobModule,
      },
    ],
  },
];

@Module({
  imports: [
    
    AuthModule,
    CronjobModule,
    RouterModule.forRoutes(routes),
    DbModule,
  ],
  controllers: [HomeController],
})
export class v1Module {}

import { Controller, Post, Param, Req } from '@nestjs/common';
import { DbService } from '../db/db.service';
import { Request } from 'express';

@Controller()
export class AuthController {
  constructor(
    private readonly db: DbService,
  ) {}

  @Post('verify')
  test(@Param('prid') prid: string, @Req() req: Request) {
    return req;
  }
}

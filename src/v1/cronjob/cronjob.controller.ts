import { Controller, Get } from '@nestjs/common';

@Controller()
export class CronjobController {
  @Get()
  pog() {
    return 'pog';
  }
}

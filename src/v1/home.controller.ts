import { Controller, Get } from '@nestjs/common';

@Controller('')
export class HomeController {
  @Get('')
  test() {
    return 'Hello World!!';
  }
}

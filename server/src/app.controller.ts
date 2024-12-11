import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

  @Get('/healthy-check')
  getHello(): string {
    return 'say Hello!!!';
  }
}

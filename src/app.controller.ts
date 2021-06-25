import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AppController {
  constructor() {}

  @Get()
  @UseGuards(AuthGuard('jwt'))
  getHello(): string {
    return 'Hello world';
  }
}

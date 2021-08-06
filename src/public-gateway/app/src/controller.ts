import { Controller, Get } from '@nestjs/common'

import { Service }         from './service'

@Controller()
export class AppController {
  constructor(private service: Service) {}

  @Get()
  getHello() {
    return this.service.getHello()
  }

  @Get('/health')
  health() {
    return this.service.healthCheck()
  }
}

import { Injectable } from '@nestjs/common'

@Injectable()
export class Service {
  getHello(): string {
    return 'Welcome to Account Management Service'
  }

  healthCheck(): string {
    return 'Welcome to Account Management Service'
  }
}

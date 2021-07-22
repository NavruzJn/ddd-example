import { MapValidationErrorsInterceptor }                        from '@atlantis-lab/nestjs-map-errors-interceptor'
import { GrpcMethod }                                            from '@nestjs/microservices'

import { Controller, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common'
import {
  ChangeStatusCommand,
  CreateCommand,
  TransactionApplicationService,
  UpdateCommand,
} from '@transaction/application'

@UseInterceptors(MapValidationErrorsInterceptor)
@Controller()
export class TransactionController {
  constructor(private readonly transactionApplicationService: TransactionApplicationService) {}

  @GrpcMethod('TransactionService', 'CreateTransaction')
  @UsePipes(new ValidationPipe({ transform: true }))
  async createAccount(command: CreateCommand) {
    const result = await this.transactionApplicationService.create(command)
    return { result }
  }

  @GrpcMethod('TransactionService', 'UpdateTransaction')
  @UsePipes(new ValidationPipe({ transform: true }))
  async updateAccount(command: UpdateCommand) {
    const result = await this.transactionApplicationService.update(command)
    return { result }
  }

  @GrpcMethod('TransactionService', 'ChangeTransactionStatus')
  @UsePipes(new ValidationPipe({ transform: true }))
  async registerAccount(command: ChangeStatusCommand) {
    const result = await this.transactionApplicationService.changeStatus(command)
    return { result }
  }
}

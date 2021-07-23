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
  createAccount(command: CreateCommand) {
    return this.transactionApplicationService.create(command)
  }

  @GrpcMethod('TransactionService', 'UpdateTransaction')
  @UsePipes(new ValidationPipe({ transform: true }))
  updateAccount(command: UpdateCommand) {
    return this.transactionApplicationService.update(command)
  }

  @GrpcMethod('TransactionService', 'ChangeTransactionStatus')
  @UsePipes(new ValidationPipe({ transform: true }))
  registerAccount(command: ChangeStatusCommand) {
    return this.transactionApplicationService.changeStatus(command)
  }
}

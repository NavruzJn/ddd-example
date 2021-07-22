import { GrpcMethod }                  from '@nestjs/microservices'

import { Controller, UseInterceptors } from '@nestjs/common'
import { TransactionQueryService }     from '@transaction/application'

@Controller()
@UseInterceptors()
export class TransactionQueriesController {
  constructor(private readonly accountQueriesService: TransactionQueryService) {}

  @GrpcMethod('TransactionService', 'GetTransactions')
  getTransactions({ pager, filters }) {
    return this.accountQueriesService.getTransactions({ pager, filters })
  }

  @GrpcMethod('TransactionService', 'GetTransaction')
  getTransaction({ id }) {
    return this.accountQueriesService.getTransaction(id)
  }
}

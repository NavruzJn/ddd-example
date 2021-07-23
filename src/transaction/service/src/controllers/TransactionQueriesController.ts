import { GrpcMethod }                  from '@nestjs/microservices'

import { Controller, UseInterceptors } from '@nestjs/common'
import { TransactionQueryService }     from '@transaction/application'

@Controller()
@UseInterceptors()
export class TransactionQueriesController {
  constructor(private readonly accountQueriesService: TransactionQueryService) {}

  @GrpcMethod('TransactionService', 'GetTransactions')
  async getTransactions({ pager, filters }) {
    const result = await this.accountQueriesService.getTransactions({ pager, filters })

    return { result }
  }

  @GrpcMethod('TransactionService', 'GetTransaction')
  async getTransaction({ id }) {
    const result = await this.accountQueriesService.getTransaction(id)

    return { result }
  }
}

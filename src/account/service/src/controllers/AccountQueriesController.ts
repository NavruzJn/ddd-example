import { GrpcMethod }                  from '@nestjs/microservices'

import { AccountQueryService }         from '@account/application'
import { Controller, UseInterceptors } from '@nestjs/common'

@Controller()
@UseInterceptors()
export class AccountQueriesController {
  constructor(private readonly accountQueriesService: AccountQueryService) {}

  @GrpcMethod('AccountService', 'GetAccounts')
  getAccounts({ pager, filters }) {
    return this.accountQueriesService.getAccounts({ pager })
  }

  @GrpcMethod('AccountService', 'GetAccount')
  getApplicationAccounts({ id }) {
    return this.accountQueriesService.getAccount(id)
  }
}

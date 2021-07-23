import { GrpcMethod }                  from '@nestjs/microservices'

import { AccountQueryService }         from '@account/application'
import { Controller, UseInterceptors } from '@nestjs/common'

@Controller()
@UseInterceptors()
export class AccountQueriesController {
  constructor(private readonly accountQueriesService: AccountQueryService) {}

  @GrpcMethod('AccountService', 'GetAccounts')
  async getAccounts({ pager, filters }) {
    const result = await this.accountQueriesService.getAccounts({ pager })

    return {
      result,
    }
  }

  @GrpcMethod('AccountService', 'GetAccount')
  async getAccount({ id }) {
    const result = await this.accountQueriesService.getAccount(id)

    return {
      result,
    }
  }

  @GrpcMethod('AccountService', 'GetRequisiteByAccountNumber')
  async getRequisiteByAccountNumber({ accountNumber }) {
    const result = await this.accountQueriesService.getRequisiteByAccountNumber(accountNumber)

    return {
      result,
    }
  }
}

import { Client, ClientGrpc }                    from '@nestjs/microservices'

import { Controller, Get, Param }                from '@nestjs/common'
import { clientOptions as accountClientOptions } from '@protos/account'
import { account as accountInterface }           from '@protos/interfaces'

@Controller({ path: '/accounts' })
export class AccountQueriesController {
  @Client(accountClientOptions)
  private readonly accountClient: ClientGrpc

  private accountService: accountInterface.AccountService

  onModuleInit() {
    this.accountService = this.accountClient.getService<accountInterface.AccountService>(
      'AccountService',
    )
  }

  @Get()
  getAccounts() {
    return this.accountService.getAccounts({})
  }

  @Get('/:id')
  getAccount(@Param('id') id: string) {
    return this.accountService.getAccount({ id })
  }
}

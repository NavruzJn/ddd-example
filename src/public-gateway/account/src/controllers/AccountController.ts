import { Client, ClientGrpc }                                    from '@nestjs/microservices'

import { ChangeStatusCommand, CreateCommand, UpdateCommand }     from '@account/application'
import { Body, Controller, OnModuleInit, Param, Post, Put, Req } from '@nestjs/common'
import { clientOptions as accountClientOptions }                 from '@protos/account'
import { account as accountInterface }                           from '@protos/interfaces'

@Controller({ path: '/account' })
export class AccountController implements OnModuleInit {
  @Client(accountClientOptions)
  private readonly accountClient: ClientGrpc

  private accountService: accountInterface.AccountService

  onModuleInit() {
    this.accountService = this.accountClient.getService<accountInterface.AccountService>(
      'AccountService',
    )
  }

  @Post()
  createTicket(@Req() req: any, @Body() body: CreateCommand) {
    return this.accountService.createAccount(body)
  }

  @Put('/:id')
  updateAccount(@Param('id') id: number, @Req() req: any, @Body() body: UpdateCommand) {
    return this.accountService.updateAccount(body)
  }

  @Put('/:id/status')
  changeStatus(@Param('id') body: ChangeStatusCommand) {
    return this.accountService.changeStatus(body)
  }
}

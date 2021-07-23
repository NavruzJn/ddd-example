import { Client, ClientGrpc }                                    from '@nestjs/microservices'

import { Body, Controller, OnModuleInit, Param, Post, Put, Req } from '@nestjs/common'
import { ChangeStatusCommand, CreateCommand, UpdateCommand }     from '@transaction/application'
import { transaction as transactionInterface }                   from '@protos/interfaces'
import { clientOptions as transactionClientOptions }             from '@protos/transaction'

@Controller({ path: '/transactions' })
export class TransactionController implements OnModuleInit {
  @Client(transactionClientOptions)
  private readonly transactionClient: ClientGrpc

  private transactionService: transactionInterface.TransactionService

  onModuleInit() {
    this.transactionService = this.transactionClient.getService<
      transactionInterface.TransactionService
    >('TransactionService')
  }

  @Post()
  createTransaction(@Req() req: any, @Body() body: CreateCommand) {
    return this.transactionService.createTransaction(body)
  }

  @Put('/:id')
  updateTransaction(@Param('id') id: number, @Req() req: any, @Body() body: UpdateCommand) {
    return this.transactionService.updateTransaction(body)
  }

  @Put('/:id/status')
  changeStatus(@Param('id') body: ChangeStatusCommand) {
    return this.transactionService.changeTransactionStatus(body)
  }
}

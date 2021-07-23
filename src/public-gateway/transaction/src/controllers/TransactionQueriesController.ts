import { Client, ClientGrpc }                        from '@nestjs/microservices'

import { Controller, Get, Param, Query }             from '@nestjs/common'
import { transaction as transactionInterface }       from '@protos/interfaces'
import { clientOptions as transactionClientOptions } from '@protos/transaction'

@Controller({ path: '/transaction' })
export class TransactionQueriesController {
  @Client(transactionClientOptions)
  private readonly transactionClient: ClientGrpc

  private transactionService: transactionInterface.TransactionService

  onModuleInit() {
    this.transactionService = this.transactionClient.getService<
      transactionInterface.TransactionService
    >('TransactionService')
  }

  @Get()
  getTransactions(
    @Query('take') take: number,
    @Query('offset') offset: number,
    @Query('orderBy') orderBy: string,
    @Query('direction') direction: string,
  ) {
    return this.transactionService.getTransactions({
      pager: {
        take,
        offset,
      },
      order: {
        by: orderBy,
        direction,
      },
    })
  }

  @Get('/:id')
  getTransaction(@Param('id') id: string) {
    return this.transactionService.getTransaction({ id })
  }
}

import { Client, ClientGrpc }                     from '@nestjs/microservices'

import { Controller, Get, Query }                 from '@nestjs/common'
import { clientOptions as currencyClientOptions } from '@protos/currency'
import { currency as currencyInterface }          from '@protos/interfaces'

@Controller({ path: '/currencies' })
export class CurrencyQueriesController {
  @Client(currencyClientOptions)
  private readonly currencyClient: ClientGrpc

  private currencyService: currencyInterface.CurrencyService

  onModuleInit() {
    this.currencyService = this.currencyClient.getService<currencyInterface.CurrencyService>(
      'CurrencyService',
    )
  }

  @Get()
  getAccounts() {
    return this.currencyService.getCurrencies({})
  }

  @Get('/rate')
  getAccount(@Query('from') from: string, @Query('to') to: string) {
    return this.currencyService.getCurrencyRate({ from, to })
  }
}

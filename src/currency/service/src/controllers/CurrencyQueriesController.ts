import { GrpcMethod }                  from '@nestjs/microservices'

import { CurrencyQueryService }        from '@currency/application'
import { Controller, UseInterceptors } from '@nestjs/common'

@Controller()
@UseInterceptors()
export class CurrencyQueriesController {
  constructor(private readonly currencyQueryService: CurrencyQueryService) {}

  @GrpcMethod('CurrencyService', 'GetCurrencies')
  getAccounts() {
    return this.currencyQueryService.getCurrencies()
  }

  @GrpcMethod('CurrencyService', 'GetCurrencyRate')
  getApplicationAccounts({ id }) {
    return this.currencyQueryService.getCurrencyRate(id)
  }
}

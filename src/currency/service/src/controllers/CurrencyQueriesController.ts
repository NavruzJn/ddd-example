import { GrpcMethod }                            from '@nestjs/microservices'

import { CurrencyQueryService, GetCurrencyRate } from '@currency/application'
import { Controller, UseInterceptors }           from '@nestjs/common'

@Controller()
@UseInterceptors()
export class CurrencyQueriesController {
  constructor(private readonly currencyQueryService: CurrencyQueryService) {}

  @GrpcMethod('CurrencyService', 'GetCurrencies')
  async getCurrencies() {
    const result = await this.currencyQueryService.getCurrencies()

    return { result }
  }

  @GrpcMethod('CurrencyService', 'GetCurrencyRate')
  async getCurrency(query: GetCurrencyRate) {
    const result = await this.currencyQueryService.getCurrencyRate(query)

    return { result }
  }
}

import { GrpcMethod }                  from '@nestjs/microservices'

import { CurrencyQueryService }        from '@currency/application'
import { Controller, UseInterceptors } from '@nestjs/common'

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
  async getCurrency({ id }) {
    const result = await this.currencyQueryService.getCurrencyRate(id)

    return { result }
  }
}

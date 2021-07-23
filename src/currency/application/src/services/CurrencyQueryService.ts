import { Injectable }      from '@nestjs/common'

import { GetCurrencyRate } from '../commands'

@Injectable()
export class CurrencyQueryService {
  async getCurrencies() {
    return {
      rows: [
        {
          code: 'USD',
          name: 'United States dollar',
        },
        {
          code: 'EUR',
          name: 'Euro',
        },
      ],
    }
  }

  async getCurrencyRate(query: GetCurrencyRate) {
    return {
      from: query.from,
      to: query.to,
      rate: 1.18,
    }
  }
}

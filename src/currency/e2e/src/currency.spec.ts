import 'reflect-metadata'

import { CurrencyQueryService } from '@currency/application'

describe('account-service', () => {
  const currencyService = new CurrencyQueryService()

  it('get currencies', async () => {
    const currencies = await currencyService.getCurrencies()
    expect(currencies).toEqual({
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
    })
  })

  it('get currency rate', async () => {
    const currencies = await currencyService.getCurrencyRate({ from: 'USD', to: 'EUR' })
    expect(currencies).toEqual({
      from: 'USD',
      to: 'EUR',
      rate: 1.18,
    })
  })
})

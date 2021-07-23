import { Module }                    from '@nestjs/common'

import { CurrencyQueriesController } from './controllers'

@Module({
  controllers: [CurrencyQueriesController],
})
export class CurrencyModule {}

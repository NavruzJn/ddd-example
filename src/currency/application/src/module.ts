import { Module }               from '@nestjs/common'

import { CurrencyQueryService } from './services'

@Module({
  providers: [CurrencyQueryService],
  exports: [CurrencyQueryService],
})
export class ApplicationModule {}

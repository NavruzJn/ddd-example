import { ApplicationModule }         from '@currency/application'
import { Module }                    from '@nestjs/common'

import { CurrencyQueriesController } from './controllers'

@Module({
  imports: [ApplicationModule],
  controllers: [CurrencyQueriesController],
})
export class ServiceModule {}

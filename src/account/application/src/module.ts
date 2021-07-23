import { Module }                                         from '@nestjs/common'

import { TransactionCreatedHandler }                      from './handlers'
import { AccountApplicationService, AccountQueryService } from './services'

@Module({
  providers: [AccountApplicationService, AccountQueryService, TransactionCreatedHandler],
  exports: [AccountApplicationService, AccountQueryService, TransactionCreatedHandler],
})
export class ApplicationModule {}

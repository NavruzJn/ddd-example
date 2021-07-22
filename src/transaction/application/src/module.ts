import { Module }                                                 from '@nestjs/common'

import { TransactionApplicationService, TransactionQueryService } from './services'

@Module({
  providers: [TransactionApplicationService, TransactionQueryService],
  exports: [TransactionApplicationService, TransactionQueryService],
})
export class ApplicationModule {}

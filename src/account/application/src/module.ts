import { Module }                                         from '@nestjs/common'

import { AccountApplicationService, AccountQueryService } from './services'

@Module({
  providers: [AccountApplicationService, AccountQueryService],
  exports: [AccountApplicationService, AccountQueryService],
})
export class ApplicationModule {}

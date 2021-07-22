import { Module }                                      from '@nestjs/common'

import { AccountController, AccountQueriesController } from './controllers'

@Module({
  controllers: [AccountController, AccountQueriesController],
})
export class AccountModule {}

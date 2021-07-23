import { Module }                                              from '@nestjs/common'

import { TransactionController, TransactionQueriesController } from './controllers'

@Module({
  controllers: [TransactionController, TransactionQueriesController],
})
export class TransactionModule {}

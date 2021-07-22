import { BusModule }                                           from '@monstrs/nestjs-bus'

import { Module }                                              from '@nestjs/common'
import { ApplicationModule }                                   from '@transaction/application'
import { PersistenceModule }                                   from '@transaction/persistence'

import { TransactionController, TransactionQueriesController } from './controllers'

@Module({
  imports: [
    BusModule.forRabbitMq({
      queueName: 'transaction',
      connectionString: process.env.BUS_URL || 'amqp://local:password@rabbitmq:5672/?heartbeat=30',
    }),
    PersistenceModule,
    ApplicationModule,
  ],
  controllers: [TransactionController, TransactionQueriesController],
})
export class ServiceModule {}

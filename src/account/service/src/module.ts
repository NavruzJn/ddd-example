import { BusModule }                                   from '@monstrs/nestjs-bus'

import { ApplicationModule }                           from '@account/application'
import { PersistenceModule }                           from '@account/persistence'
import { Module }                                      from '@nestjs/common'

import { AccountController, AccountQueriesController } from './controllers'

@Module({
  imports: [
    BusModule.forRabbitMq({
      queueName: 'account',
      connectionString: process.env.BUS_URL || 'amqp://local:password@rabbitmq:5672/?heartbeat=30',
    }),
    PersistenceModule,
    ApplicationModule,
  ],
  controllers: [AccountController, AccountQueriesController],
})
export class ServiceModule {}

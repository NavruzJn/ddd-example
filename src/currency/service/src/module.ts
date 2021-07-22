import { BusModule }                 from '@monstrs/nestjs-bus'

import { ApplicationModule }         from '@currency/application'
import { Module }                    from '@nestjs/common'

import { CurrencyQueriesController } from './controllers'

@Module({
  imports: [
    BusModule.forRabbitMq({
      queueName: 'currency',
      connectionString: process.env.BUS_URL || 'amqp://local:password@rabbitmq:5672/?heartbeat=30',
    }),
    ApplicationModule,
  ],
  controllers: [CurrencyQueriesController],
})
export class ServiceModule {}

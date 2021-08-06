import { BusModule }                                   from '@monstrs/nestjs-bus'
import { BootModule }                                  from '@nestcloud/boot'
import { BOOT, CONSUL, LOADBALANCE }                                from '@nestcloud/common'
import { ConsulModule }                                from '@nestcloud/consul'
import { LoadbalanceModule }                           from '@nestcloud/loadbalance'
import { ServiceModule as CloudModule }                from '@nestcloud/service'
import { resolve }                                     from 'path'

import { ApplicationModule }                           from '@account/application'
import { PersistenceModule }                           from '@account/persistence'
import { Module }                                      from '@nestjs/common'

import { AccountController, AccountQueriesController } from './controllers'

@Module({
  imports: [
    BootModule.forRoot({ filePath: resolve(__dirname, '../config.yaml') }),
    ConsulModule.forRootAsync({ inject: [BOOT] }),
    CloudModule.forRootAsync({ inject: [BOOT, CONSUL] }),
    // LoadbalanceModule.forRootAsync({ inject: [LOADBALANCE] }),
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

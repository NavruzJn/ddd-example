import { BootModule }        from '@nestcloud/boot'
import { BOOT, CONSUL }      from '@nestcloud/common'
import { ConfigModule }      from '@nestcloud/config'
import { ConsulModule }      from '@nestcloud/consul'
import { LoggerModule }      from '@nestcloud/logger'
import { ServiceModule }     from '@nestcloud/service'
import { resolve }           from 'path'

import { Module }            from '@nestjs/common'
import { AccountModule }     from '@public-gateway/account'
import { CurrencyModule }    from '@public-gateway/currency'
import { TransactionModule } from '@public-gateway/transaction'

import { AppController }     from './controller'
import { Service }           from './service'

@Module({
  imports: [
    LoggerModule.forRoot(),
    BootModule.forRoot({ filePath: resolve(__dirname, '../config.yaml') }),
    ConsulModule.forRootAsync({ inject: [BOOT] }),
    ConfigModule.forRootAsync({ inject: [BOOT, CONSUL] }),
    ServiceModule.forRootAsync({ inject: [BOOT, CONSUL] }),
    CurrencyModule,
    AccountModule,
    TransactionModule,
  ],
  controllers: [AppController],
  providers: [Service],
  exports: [Service],
})
export class AppModule {}

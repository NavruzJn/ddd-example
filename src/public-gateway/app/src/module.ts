import { ConfigModule }   from '@nestjs/config'

import { Module }         from '@nestjs/common'
import { AccountModule }  from '@public-gateway/account'
import { CurrencyModule } from '@public-gateway/currency'

import appConfig          from './config/app.config'
import { AppController }  from './controller'
import { Service }        from './service'

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [appConfig],
    }),
    CurrencyModule,
    AccountModule,
  ],
  controllers: [AppController],
  providers: [Service],
  exports: [Service],
})
export class AppModule {}

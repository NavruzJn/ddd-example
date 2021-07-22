import { ConfigModule }  from '@nestjs/config'

import { Module }        from '@nestjs/common'
import { AccountModule } from '@public-gateway/account'

import appConfig         from './config/app.config'
import { AppController } from './controller'
import { Service }       from './service'

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [appConfig],
    }),
    AccountModule,
  ],
  controllers: [AppController],
  providers: [Service],
  exports: [Service],
})
export class AppModule {}

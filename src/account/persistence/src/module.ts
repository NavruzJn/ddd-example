import { LoggerModule }            from '@monstrs/nestjs-logger'
import { TypeOrmModule }           from '@nestjs/typeorm'

import { Global, Module }          from '@nestjs/common'

import config                      from './config'
import { Account }                 from './entities'
import { AccountEntityRepository } from './repositories'

const feature = TypeOrmModule.forFeature([Account])

@Global()
@Module({
  imports: [LoggerModule, feature.module, TypeOrmModule.forRoot(config)],
  providers: [...feature.providers, AccountEntityRepository],
  exports: [...feature.exports, AccountEntityRepository],
})
export class PersistenceModule {}

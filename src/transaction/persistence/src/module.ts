import { NestLogger }                  from '@monstrs/nestjs-logger'
import { TypeOrmModule }               from '@nestjs/typeorm'

import { Global, Module }              from '@nestjs/common'

import config                          from './config'
import { Transaction }                 from './entities'
import { TransactionEntityRepository } from './repositories'

const feature = TypeOrmModule.forFeature([Transaction])

@Global()
@Module({
  imports: [NestLogger, feature.module, TypeOrmModule.forRoot(config)],
  providers: [...feature.providers, TransactionEntityRepository],
  exports: [...feature.exports, TransactionEntityRepository],
})
export class PersistenceModule {}

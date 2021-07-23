import { LoggerModule }                                       from '@monstrs/nestjs-logger'
import { TypeOrmModule }                                      from '@nestjs/typeorm'

import { Global, Module }                                     from '@nestjs/common'

import config                                                 from './config'
import { Account, Requisite }                                 from './entities'
import { AccountEntityRepository, RequisiteEntityRepository } from './repositories'

const feature = TypeOrmModule.forFeature([Account, Requisite])

@Global()
@Module({
  imports: [LoggerModule, feature.module, TypeOrmModule.forRoot(config)],
  providers: [...feature.providers, AccountEntityRepository, RequisiteEntityRepository],
  exports: [...feature.exports, AccountEntityRepository, RequisiteEntityRepository],
})
export class PersistenceModule {}

import { Bus }                          from '@monstrs/nestjs-bus'
import { Logger }                       from '@monstrs/nestjs-logger'
import { WriteRepository }              from '@node-ts/ddd'
import { Connection }                   from 'typeorm'

import { Requisite as RequisiteEntity } from '@account/domain'
import { Injectable }                   from '@nestjs/common'
import { messages }                     from '@account/application'

import { Requisite }                    from '../entities'

@Injectable()
// @ts-ignore
export class RequisiteEntityRepository extends WriteRepository<RequisiteEntity, Requisite> {
  constructor(
    private readonly connection: Connection,
    private readonly logger: Logger,
    private readonly bus: Bus,
  ) {
    // @ts-ignore
    super(RequisiteEntity, Requisite, connection, bus, logger)
  }

  async getRequisiteById(id) {
    const writeModel = await this.repository.findOne({
      where: { id },
    })

    if (!writeModel) {
      throw new Error(messages.notFound.defaultMessage)
    }

    return this.toAggregateRoot(writeModel)
  }

  async getRequisiteByAccountNumber(accountNumber) {
    const writeModel = await this.repository.findOne({
      where: { accountNumber },
      relations: ['account'],
    })

    if (!writeModel) {
      throw new Error(messages.notFound.defaultMessage)
    }

    return this.toAggregateRoot(writeModel)
  }
}

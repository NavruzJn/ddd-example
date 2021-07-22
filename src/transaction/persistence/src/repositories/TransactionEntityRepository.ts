import { Bus }                              from '@monstrs/nestjs-bus'
import { NestLogger }                       from '@monstrs/nestjs-logger'
import { WriteRepository }                  from '@node-ts/ddd'
import { Connection }                       from 'typeorm'

import { Injectable }                       from '@nestjs/common'
import { Transaction as TransactionEntity } from '@transaction/domain'
import { messages }                         from '@transaction/application'

import { Transaction }                      from '../entities'

@Injectable()
// @ts-ignore
export class TransactionEntityRepository extends WriteRepository<TransactionEntity, Account> {
  constructor(
    private readonly connection: Connection,
    private readonly logger: NestLogger,
    private readonly bus: Bus,
  ) {
    // @ts-ignore
    super(TransactionEntity, Transaction, connection, bus, logger)
  }

  async getTransactionById(id) {
    const writeModel = await this.repository.findOne({
      where: { id },
    })

    if (!writeModel) {
      throw new Error(messages.notFound.defaultMessage)
    }

    return this.toAggregateRoot(writeModel)
  }

  async getTransactions(pager, filters) {
    const qb = await this.repository.createQueryBuilder('transaction')

    if (pager) {
      const { take = 25, offset = 0 } = pager
      qb.limit(take)
      qb.offset(offset)
    }

    const rows = await qb.getMany()

    return {
      rows,
      pageInfo: {
        hasNext: false,
      },
    }
  }
}

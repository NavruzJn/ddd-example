import { Bus }                      from '@monstrs/nestjs-bus'
import { Logger }                   from '@monstrs/nestjs-logger'
import { WriteRepository }          from '@node-ts/ddd'
import { Connection }               from 'typeorm'

import { Account as AccountEntity } from '@account/domain'
import { Injectable }               from '@nestjs/common'
import { messages }                 from '@account/application'

import { Account }                  from '../entities'

@Injectable()
// @ts-ignore
export class AccountEntityRepository extends WriteRepository<AccountEntity, Account> {
  constructor(
    private readonly connection: Connection,
    private readonly logger: Logger,
    private readonly bus: Bus,
  ) {
    // @ts-ignore
    super(AccountEntity, Account, connection, bus, logger)
  }

  async getAccountById(id) {
    const writeModel = await this.repository.findOne({
      where: { id },
    })

    if (!writeModel) {
      throw new Error(messages.notFound.defaultMessage)
    }

    return this.toAggregateRoot(writeModel)
  }

  async getAccounts(pager) {
    const qb = await this.repository
      .createQueryBuilder('account')
      .leftJoinAndSelect('account.requisites', 'requisite')

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

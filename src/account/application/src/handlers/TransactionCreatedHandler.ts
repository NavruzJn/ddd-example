import { HandlesMessage }                                     from '@monstrs/nestjs-bus'
import { Handler }                                            from '@node-ts/bus-core'

import { AccountEntityRepository, RequisiteEntityRepository } from '@account/persistence'
import { TransactionCreated, Type }                           from '@transaction/domain'

@HandlesMessage(TransactionCreated)
export class TransactionCreatedHandler implements Handler<TransactionCreated> {
  constructor(
    private readonly accountEntityRepository: AccountEntityRepository,
    private readonly requisiteEntityRepository: RequisiteEntityRepository,
  ) {}

  async handle(event: TransactionCreated): Promise<void> {
    const { senderAccount, beneficiaryAccount, amount, type } = event

    let accountRequisite

    if (type === Type.Passive) {
      accountRequisite = await this.requisiteEntityRepository.getRequisiteByAccountNumber(
        senderAccount,
      )
      accountRequisite.updateBalance(accountRequisite.balance - amount)
    }

    if (type === Type.Active) {
      accountRequisite = await this.requisiteEntityRepository.getRequisiteByAccountNumber(
        beneficiaryAccount,
      )
      accountRequisite.updateBalance(accountRequisite.balance + amount)
    }

    if (!accountRequisite) {
      throw new Error('Transaction account not found')
    }

    await this.requisiteEntityRepository.save(accountRequisite)
  }
}

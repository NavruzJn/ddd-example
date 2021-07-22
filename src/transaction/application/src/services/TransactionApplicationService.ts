import { v4 as uuid }                                        from 'uuid'

import { Injectable }                                        from '@nestjs/common'
import { Status, Transaction }                               from '@transaction/domain'
import { TransactionEntityRepository }                       from '@transaction/persistence'

import { ChangeStatusCommand, CreateCommand, UpdateCommand } from '../commands'

@Injectable()
export class TransactionApplicationService {
  constructor(private readonly transactionEntityRepository: TransactionEntityRepository) {}

  async create(command: CreateCommand): Promise<any> {
    const transaction = await Transaction.create(
      uuid(),
      command.senderId,
      command.beneficiaryId,
      command.description,
      command.amount,
      command.currency,
      Status.New,
    )

    await this.transactionEntityRepository.save(transaction)

    return transaction
  }

  async update(command: UpdateCommand): Promise<any> {
    const transaction = await this.transactionEntityRepository.getById(command.id)

    if (transaction.status !== Status.New) {
      throw new Error('Transaction can not be updated')
    }

    transaction.update(
      command.beneficiaryId,
      command.description,
      command.amount,
      command.currency,
      Status.New,
    )

    await this.transactionEntityRepository.save(transaction)

    return transaction
  }

  async changeStatus(command: ChangeStatusCommand): Promise<any> {
    const account = await this.transactionEntityRepository.getById(command.id)

    account.changeStatus(command.status)

    await this.transactionEntityRepository.save(account)

    return account
  }
}

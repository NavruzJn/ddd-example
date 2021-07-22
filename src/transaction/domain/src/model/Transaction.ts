import { AggregateRoot }                                                    from '@node-ts/ddd'
import { Uuid }                                                             from '@node-ts/ddd-types'
import { AggregateRootProperties }                                          from '@node-ts/ddd-types'

import { TransactionCreated, TransactionStatusChanged, TransactionUpdated } from '../events'
import { Status }                                                           from './Status'

export interface AccountProperties extends AggregateRootProperties {
  senderId: Uuid
  beneficiaryId: Uuid
  description: string
  amount: number
  currency: string
  status: Status
}

export class Transaction extends AggregateRoot implements AccountProperties {
  senderId: Uuid

  beneficiaryId: Uuid

  description: string

  amount: number

  currency: string

  status: Status

  static async create(
    id: Uuid,
    senderId: Uuid,
    beneficiaryId: Uuid,
    description: string,
    amount: number,
    currency: string,
    status: Status,
  ): Promise<Transaction> {
    const transaction = new Transaction(id)

    const transactionCreated = new TransactionCreated(
      id,
      senderId,
      beneficiaryId,
      description,
      amount,
      currency,
      status,
    )

    transaction.when(transactionCreated)

    return transaction
  }

  public update(
    beneficiaryId: Uuid,
    description: string,
    amount: number,
    currency: string,
    status: Status,
  ) {
    const transactionUpdated = new TransactionUpdated(
      beneficiaryId,
      description,
      amount,
      currency,
      status,
    )

    this.when(transactionUpdated)
  }

  public changeStatus(status: Status) {
    const statusChanged = new TransactionStatusChanged(this.id, status)

    this.when(statusChanged)
  }

  protected whenTransactionCreated(event: TransactionCreated) {
    this.beneficiaryId = event.beneficiaryId
    this.senderId = event.senderId
    this.amount = event.amount
    this.currency = event.currency
    this.description = event.description
    this.status = Status.New
  }

  protected whenAccountUpdated(event: TransactionUpdated): void {
    this.beneficiaryId = event.beneficiaryId
    this.amount = event.amount
    this.currency = event.currency
    this.description = event.description
  }

  protected whenTransactionStatusChanged(event: TransactionStatusChanged) {
    this.status = event.status
  }
}

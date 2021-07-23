import { AggregateRoot }                                                    from '@node-ts/ddd'
import { Uuid }                                                             from '@node-ts/ddd-types'
import { AggregateRootProperties }                                          from '@node-ts/ddd-types'

import { TransactionCreated, TransactionStatusChanged, TransactionUpdated } from '../events'
import { Status }                                                           from './Status'
import { Type }                                                             from './Type'

export interface AccountProperties extends AggregateRootProperties {
  senderAccount: Uuid
  beneficiaryAccount: Uuid
  description: string
  amount: number
  currency: string
  status: Status
  type: Type
}

export class Transaction extends AggregateRoot implements AccountProperties {
  senderAccount: Uuid

  beneficiaryAccount: Uuid

  description: string

  amount: number

  currency: string

  status: Status

  type: Type

  static async create(
    id: Uuid,
    senderAccount: Uuid,
    beneficiaryAccount: Uuid,
    description: string,
    amount: number,
    currency: string,
    status: Status,
    type: Type,
  ): Promise<Transaction> {
    const transaction = new Transaction(id)

    const transactionCreated = new TransactionCreated(
      id,
      senderAccount,
      beneficiaryAccount,
      description,
      amount,
      currency,
      status,
      type,
    )

    transaction.when(transactionCreated)

    return transaction
  }

  public update(
    beneficiaryAccount: Uuid,
    description: string,
    amount: number,
    currency: string,
    status: Status,
    type: Type,
  ) {
    const transactionUpdated = new TransactionUpdated(
      beneficiaryAccount,
      description,
      amount,
      currency,
      status,
      type,
    )

    this.when(transactionUpdated)
  }

  public changeStatus(status: Status) {
    const statusChanged = new TransactionStatusChanged(this.id, status)

    this.when(statusChanged)
  }

  protected whenTransactionCreated(event: TransactionCreated) {
    this.beneficiaryAccount = event.beneficiaryAccount
    this.senderAccount = event.senderAccount
    this.amount = event.amount
    this.currency = event.currency
    this.description = event.description
    this.status = Status.New
    this.type = event.type
  }

  protected whenAccountUpdated(event: TransactionUpdated): void {
    this.beneficiaryAccount = event.beneficiaryAccount
    this.amount = event.amount
    this.currency = event.currency
    this.description = event.description
    this.type = event.type
  }

  protected whenTransactionStatusChanged(event: TransactionStatusChanged) {
    this.status = event.status
  }
}

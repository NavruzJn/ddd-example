import { Uuid }   from '@node-ts/ddd-types'

import { Event }  from '@node-ts/bus-messages'

import { Status } from '../model'

export class TransactionCreated extends Event {
  static readonly NAME = 'transaction/transaction-created'

  $name = TransactionCreated.NAME

  $version = 0

  constructor(
    readonly transactionId: Uuid,
    readonly senderId: Uuid,
    readonly beneficiaryId: Uuid,
    readonly description: string,
    readonly amount: number,
    readonly currency: string,
    readonly status: Status,
  ) {
    super()
  }
}

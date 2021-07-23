import { Uuid }         from '@node-ts/ddd-types'

import { Event }        from '@node-ts/bus-messages'

import { Status, Type } from '../model'

export class TransactionUpdated extends Event {
  static readonly NAME = 'transaction/transaction-updated'

  $name = TransactionUpdated.NAME

  $version = 0

  constructor(
    readonly beneficiaryId: Uuid,
    readonly description: string,
    readonly amount: number,
    readonly currency: string,
    readonly status: Status,
    readonly type: Type,
  ) {
    super()
  }
}

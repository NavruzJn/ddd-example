import { Uuid }   from '@node-ts/ddd-types'

import { Event }  from '@node-ts/bus-messages'

import { Status } from '../model'

export class TransactionStatusChanged extends Event {
  static readonly NAME = 'transaction/transaction-status-changed'

  $name = TransactionStatusChanged.NAME

  $version = 0

  constructor(readonly id: Uuid, readonly status: Status) {
    super()
  }
}

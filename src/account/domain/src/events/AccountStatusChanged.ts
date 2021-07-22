import { Uuid }   from '@node-ts/ddd-types'

import { Event }  from '@node-ts/bus-messages'

import { Status } from '../model'

export class AccountStatusChanged extends Event {
  static readonly NAME = 'account/account-status-changed'

  $name = AccountStatusChanged.NAME

  $version = 0

  constructor(readonly accountId: Uuid, readonly status: Status) {
    super()
  }
}

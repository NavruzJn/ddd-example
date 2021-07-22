import { Uuid }                        from '@node-ts/ddd-types'

import { Event }                       from '@node-ts/bus-messages'

import { Birthday, Email, Requisites } from '../model'

export class AccountCreated extends Event {
  static readonly NAME = 'account/account-created'

  $name = AccountCreated.NAME

  $version = 0

  constructor(
    readonly accountId: Uuid,
    readonly birthday: Birthday,
    readonly email: Email,
    readonly requisites: Requisites,
    readonly password: string,
    readonly firstname: string,
    readonly lastname: string,
  ) {
    super()
  }
}

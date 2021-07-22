import { Event }           from '@node-ts/bus-messages'

import { Birthday, Email } from '../model'

export class AccountUpdated extends Event {
  static readonly NAME = 'account/account-updated'

  $name = AccountUpdated.NAME

  $version = 0

  constructor(
    readonly birthday: Birthday,
    readonly email: Email,
    readonly firstname: string,
    readonly lastname: string,
  ) {
    super()
  }
}

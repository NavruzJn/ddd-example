import { Uuid }  from '@node-ts/ddd-types'

import { Event } from '@node-ts/bus-messages'

export class EmailConfirmed extends Event {
  static readonly NAME = 'account/email-confirmed'

  $name = EmailConfirmed.NAME

  $version = 0

  constructor(readonly identityId: Uuid, readonly email: string) {
    super()
  }
}

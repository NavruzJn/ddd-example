import { Uuid }  from '@node-ts/ddd-types'

import { Event } from '@node-ts/bus-messages'

export class BirthdayConfirmed extends Event {
  static readonly NAME = 'account/birthday-confirmed'

  $name = BirthdayConfirmed.NAME

  $version = 0

  constructor(readonly identityId: Uuid, readonly birthday: Date) {
    super()
  }
}

import { Column }                     from 'typeorm'

import { Birthday as BirthdayEntity } from '@account/domain'

export class Birthday extends BirthdayEntity {
  @Column()
  declare date: Date

  @Column()
  confirmed: boolean = false
}

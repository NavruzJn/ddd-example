import { Column }                     from 'typeorm'

import { Birthday as BirthdayEntity } from '@account/domain'

export class Birthday extends BirthdayEntity {
  @Column()
  date: string

  @Column()
  confirmed: boolean = false
}

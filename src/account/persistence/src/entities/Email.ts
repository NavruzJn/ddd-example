import { Column }               from 'typeorm'

import { Email as EmailEntity } from '@account/domain'

export class Email extends EmailEntity {
  @Column({ unique: true })
  declare address: string

  @Column()
  confirmed: boolean = false
}

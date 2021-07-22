import { Column }                         from 'typeorm'

import { Requisites as RequisitesEntity } from '@account/domain'

export class Requisites extends RequisitesEntity {
  @Column({ unique: true, name: 'account_number' })
  accountNumber: string

  @Column()
  currency: string
}

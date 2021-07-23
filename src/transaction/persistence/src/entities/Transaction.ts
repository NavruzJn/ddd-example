import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

import { Status }                                                                     from '@transaction/domain'

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ name: 'sender_account' })
  senderAccount: string

  @Column({ name: 'beneficiary_account' })
  beneficiaryAccount: string

  @Column()
  description: string

  @Column({ type: 'float' })
  amount: number

  @Column()
  currency: string

  @Column('enum', {
    enum: Status,
    default: Status.New,
  })
  status: Status

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}

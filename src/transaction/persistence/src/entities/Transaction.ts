import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

import { Status }                                                                     from '@transaction/domain'

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ name: 'sender_id' })
  senderId: string

  @Column({ name: 'beneficiary_id' })
  beneficiaryId: string

  @Column()
  description: string

  @Column()
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

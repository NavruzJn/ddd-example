import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

import { Account } from './Account'

@Entity()
export class Requisite {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ type: 'float' })
  balance: number

  @Column({ unique: true, name: 'account_number' })
  accountNumber: string

  @ManyToOne(
    type => Account,
    account => account.requisites,
    {
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
  )
  @JoinColumn({ name: 'account_id', referencedColumnName: 'id' })
  account?: Account

  @Column()
  currency: string

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}

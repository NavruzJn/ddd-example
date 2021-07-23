import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

import { Requisite as RequisitesEntity } from '@account/domain'

import { Account }                       from './Account'

@Entity()
export class Requisite extends RequisitesEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ unique: true })
  amount: number

  @Column()
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

import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

import { Status }                                                                     from '@account/domain'

import { Birthday }                                                                   from './Birthday'
import { Email }                                                                      from './Email'
import { Requisites }                                                                 from './Requisites'

@Entity()
export class Account {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column(type => Birthday)
  birthday: Birthday

  @Column(type => Email)
  email: Email

  @Column(type => Requisites)
  requisites: Requisites

  @Column()
  password: string

  @Column()
  firstname: string

  @Column()
  lastname: string

  @CreateDateColumn({ name: 'last_session' })
  lastSession: Date

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

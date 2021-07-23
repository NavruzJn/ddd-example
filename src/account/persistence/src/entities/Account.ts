import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

import { Status }    from '@account/domain'

import { Birthday }  from './Birthday'
import { Email }     from './Email'
import { Requisite } from './Requisite'

@Entity()
export class Account {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column(type => Birthday)
  birthday: Birthday

  @Column(type => Email)
  email: Email

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

  @OneToMany(
    type => Requisite,
    requisite => requisite.account,
    {
      cascade: true,
    },
  )
  requisites?: Requisite[]

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}

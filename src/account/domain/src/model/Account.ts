import { AggregateRoot }                 from '@node-ts/ddd'
import { AggregateRootProperties, Uuid } from '@node-ts/ddd-types'

import {
  AccountCreated,
  AccountStatusChanged,
  AccountUpdated,
  BirthdayConfirmed,
  EmailConfirmed,
} from '../events'
import { Birthday }                      from './Birthday'
import { Email }                         from './Email'
import { Requisite }                     from './Requisite'
import { Status }                        from './Status'

export interface AccountProperties extends AggregateRootProperties {
  birthday: Birthday
  email: Email
  password: string
  firstname: string
  lastname: string
  requisites: Requisite[]
  status: Status
}

export class Account extends AggregateRoot implements AccountProperties {
  birthday: Birthday

  email: Email

  requisites: Requisite[]

  status: Status

  lastSession: Date

  password: string

  firstname: string

  lastname: string

  static async create(
    id: Uuid,
    email: string,
    firstname: string,
    lastname: string,
    password: string,
    birthday: Date,
    requisites: {
      accountNumber: string
      balance: number
      currency: string
    }[],
  ): Promise<Account> {
    const account = new Account(id)

    const accountCreated = new AccountCreated(
      id,
      new Birthday(birthday),
      new Email(email),
      requisites.map(
        requisite => new Requisite(requisite.accountNumber, requisite.currency, requisite.balance),
      ),
      password,
      firstname,
      lastname,
    )

    account.when(accountCreated)

    return account
  }

  public update(email: string, firstname: string, lastname: string, birthday: Date) {
    const updatedAccount = new AccountUpdated(
      new Birthday(birthday),
      new Email(email),
      firstname,
      lastname,
    )

    this.when(updatedAccount)
  }

  public confirmEmail() {
    const emailConfirmed = new EmailConfirmed(this.id, this.email.address)

    this.when(emailConfirmed)
  }

  public confirmBirthday() {
    const birthdayConfirmed = new BirthdayConfirmed(this.id, this.birthday.date)

    this.when(birthdayConfirmed)
  }

  public changeStatus(status: Status) {
    const statusChanged = new AccountStatusChanged(this.id, status)

    this.when(statusChanged)
  }

  public updateAccountSession(lastSession: Date) {
    this.lastSession = lastSession
  }

  protected whenAccountCreated(event: AccountCreated) {
    this.email = event.email
    this.birthday = event.birthday
    this.firstname = event.firstname
    this.lastname = event.lastname
    this.requisites = event.requisites
    this.password = event.password
    this.status = Status.New
  }

  protected whenAccountUpdated(event: AccountUpdated): void {
    this.email = event.email
    this.birthday = event.birthday
    this.firstname = event.firstname
    this.lastname = event.lastname
  }

  protected whenBirthdayConfirmed(_: BirthdayConfirmed) {
    this.birthday.confirm()
  }

  protected whenEmailConfirmed(_: EmailConfirmed) {
    this.email.confirm()
  }

  protected whenAccountStatusChanged(event: AccountStatusChanged) {
    this.status = event.status
  }
}

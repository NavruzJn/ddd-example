import { v4 as uuid }              from 'uuid'

import { Account }                 from '@account/domain'
import { AccountEntityRepository } from '@account/persistence'
import { Injectable }              from '@nestjs/common'

import {
  ChangeStatusCommand,
  ConfirmBirthdayCommand,
  ConfirmEmailCommand,
  CreateCommand,
  UpdateCommand,
} from '../commands'

@Injectable()
export class AccountApplicationService {
  constructor(private readonly accountStoreRepository: AccountEntityRepository) {}

  async create(command: CreateCommand): Promise<any> {
    const account = await Account.create(
      uuid(),
      command.email,
      command.firstname,
      command.lastname,
      command.password,
      command.birthday,
      command.accountNumber,
      command.currency,
    )

    await this.accountStoreRepository.save(account)

    return account
  }

  async update(command: UpdateCommand): Promise<any> {
    const account = await this.accountStoreRepository.getById(command.id)

    account.update(command.email, command.firstname, command.lastname, command.birthday)

    await this.accountStoreRepository.save(account)

    return account
  }

  async confirmEmail(command: ConfirmEmailCommand): Promise<any> {
    const account = await this.accountStoreRepository.getById(command.id)

    account.confirmEmail()

    await this.accountStoreRepository.save(account)

    return account
  }

  async confirmBirthday(command: ConfirmBirthdayCommand): Promise<any> {
    const account = await this.accountStoreRepository.getById(command.id)

    account.confirmBirthday()

    await this.accountStoreRepository.save(account)

    return account
  }

  async changeStatus(command: ChangeStatusCommand): Promise<any> {
    const account = await this.accountStoreRepository.getById(command.id)

    account.changeStatus(command.status)

    await this.accountStoreRepository.save(account)

    return account
  }
}
import { Client, ClientGrpc }                                         from '@nestjs/microservices'
import { v4 as uuid }                                                 from 'uuid'

import { Injectable, OnModuleInit }                                   from '@nestjs/common'
import { Status, Transaction, Type }                                  from '@transaction/domain'
import { TransactionEntityRepository }                                from '@transaction/persistence'
import { clientOptions as accountClientOptions }                      from '@protos/account'
import { clientOptions as currencyClientOptions }                     from '@protos/currency'
import { account as accountInterface, currency as currencyInterface } from '@protos/interfaces'

import { ChangeStatusCommand, CreateCommand, UpdateCommand }          from '../commands'

@Injectable()
export class TransactionApplicationService implements OnModuleInit {
  @Client(accountClientOptions)
  private readonly accountClient: ClientGrpc

  @Client(currencyClientOptions)
  private readonly currencyClient: ClientGrpc

  private accountService: accountInterface.AccountService

  private currencyService: currencyInterface.CurrencyService

  onModuleInit() {
    this.accountService = this.accountClient.getService<accountInterface.AccountService>(
      'AccountService',
    )

    this.currencyService = this.accountClient.getService<currencyInterface.CurrencyService>(
      'CurrencyService',
    )
  }

  constructor(private readonly transactionEntityRepository: TransactionEntityRepository) {}

  /**
   * Creates transaction for sender and beneficiary
   * Check sender account requisite balance
   * In case the currency of sender different get actual rate
   * create event that transaction is created
   * @param command type of CreateCommand
   * @returns transaction
   */
  async create(command: CreateCommand): Promise<any> {
    const {
      result: senderAccountRequisite,
    } = await this.accountService
      .getRequisiteByAccountNumber({ accountNumber: command.senderAccount })
      .toPromise()

    const {
      result: beneficiaryAccountRequisite,
    } = await this.accountService
      .getRequisiteByAccountNumber({ accountNumber: command.beneficiaryAccount })
      .toPromise()

    let senderTransactionAmount = command.amount
    let beneficiaryTransactionAmount = command.amount

    if (senderAccountRequisite.currency !== command.currency) {
      const { result: currencyRate } = await this.currencyService
        .getCurrencyRate({ from: senderAccountRequisite.currency, to: command.currency })
        .toPromise()

      senderTransactionAmount = command.amount * currencyRate.rate
    }

    if (beneficiaryAccountRequisite.currency !== command.currency) {
      const { result: currencyRate } = await this.currencyService
        .getCurrencyRate({ from: beneficiaryAccountRequisite.currency, to: command.currency })
        .toPromise()

      beneficiaryTransactionAmount = command.amount * currencyRate.rate
    }

    const senderTransaction = await Transaction.create(
      uuid(),
      senderAccountRequisite.accountNumber,
      beneficiaryAccountRequisite.accountNumber,
      command.description,
      senderTransactionAmount,
      senderAccountRequisite.currency,
      Status.New,
      Type.Passive,
    )

    await this.transactionEntityRepository.save(senderTransaction)

    const beneficiaryTransaction = await Transaction.create(
      uuid(),
      senderAccountRequisite.accountNumber,
      beneficiaryAccountRequisite.accountNumber,
      command.description,
      beneficiaryTransactionAmount,
      senderAccountRequisite.currency,
      Status.New,
      Type.Active,
    )

    await this.transactionEntityRepository.save(beneficiaryTransaction)

    return senderTransaction
  }

  async update(command: UpdateCommand): Promise<any> {
    const transaction = await this.transactionEntityRepository.getById(command.id)

    if (transaction.status !== Status.New) {
      throw new Error('Transaction can not be updated')
    }

    transaction.update(
      command.beneficiaryAccount,
      command.description,
      command.amount,
      command.currency,
      Status.New,
      command.type,
    )

    await this.transactionEntityRepository.save(transaction)

    return transaction
  }

  async changeStatus(command: ChangeStatusCommand): Promise<any> {
    const account = await this.transactionEntityRepository.getById(command.id)

    account.changeStatus(command.status)

    await this.transactionEntityRepository.save(account)

    return account
  }
}

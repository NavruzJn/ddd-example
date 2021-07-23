export class Requisite {
  accountNumber: string

  currency: string

  balance: number

  constructor(accountNumber: string, currency: string, balance: number) {
    this.accountNumber = accountNumber
    this.currency = currency
    this.balance = balance
  }

  updateCurrency(currency: string) {
    this.currency = currency
  }

  updateAccountNumber(accountNumber: string) {
    this.accountNumber = accountNumber
  }

  updateBalance(balance: number) {
    this.balance = balance
  }
}

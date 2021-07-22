export class Requisites {
  accountNumber: string

  currency: string

  constructor(accountNumber: string, currency: string) {
    this.accountNumber = accountNumber
    this.currency = currency
  }

  updateCurrency(currency: string) {
    this.currency = currency
  }

  updateAccountNumber(accountNumber: string) {
    this.accountNumber = accountNumber
  }
}

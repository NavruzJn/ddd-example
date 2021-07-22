export class Email {
  address: string

  confirmed: boolean = false

  constructor(address: string) {
    this.address = address
  }

  confirm() {
    this.confirmed = true
  }
}

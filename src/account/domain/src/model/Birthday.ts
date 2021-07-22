export class Birthday {
  date: Date

  confirmed: boolean = false

  constructor(date: Date) {
    this.date = date
  }

  confirm() {
    this.confirmed = true
  }
}

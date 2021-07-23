import { IsNotEmpty } from 'class-validator'

export class CreateRequisite {
  @IsNotEmpty()
  accountNumber: string

  @IsNotEmpty()
  balance: number

  @IsNotEmpty()
  currency: string
}

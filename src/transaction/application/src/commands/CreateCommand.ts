import { IsNotEmpty } from 'class-validator'

export class CreateCommand {
  @IsNotEmpty()
  senderAccount: string

  @IsNotEmpty()
  beneficiaryAccount: string

  @IsNotEmpty()
  description: string

  @IsNotEmpty()
  amount: number

  @IsNotEmpty()
  currency: string
}

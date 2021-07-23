import { IsNotEmpty } from 'class-validator'

export class UpdateCommand {
  @IsNotEmpty()
  id: string

  @IsNotEmpty()
  beneficiaryAccount: string

  @IsNotEmpty()
  description: string

  @IsNotEmpty()
  amount: number

  @IsNotEmpty()
  currency: string
}

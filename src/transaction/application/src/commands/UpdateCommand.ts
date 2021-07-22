import { IsNotEmpty } from 'class-validator'

export class UpdateCommand {
  @IsNotEmpty()
  id: string

  @IsNotEmpty()
  beneficiaryId: string

  @IsNotEmpty()
  description: string

  @IsNotEmpty()
  amount: number

  @IsNotEmpty()
  currency: string
}

import { IsNotEmpty } from 'class-validator'

export class CreateCommand {
  @IsNotEmpty()
  senderId: string

  @IsNotEmpty()
  beneficiaryId: string

  @IsNotEmpty()
  description: string

  @IsNotEmpty()
  amount: number

  @IsNotEmpty()
  currency: string
}

import { IsNotEmpty } from 'class-validator'

import { Type }       from '@transaction/domain'

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

  @IsNotEmpty()
  type: Type
}

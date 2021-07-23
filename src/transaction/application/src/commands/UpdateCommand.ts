import { IsNotEmpty } from 'class-validator'

import { Type }       from '@transaction/domain'

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

  @IsNotEmpty()
  type: Type
}

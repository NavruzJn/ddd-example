import { IsNotEmpty } from 'class-validator'

import { Status }     from '@transaction/domain'

export class ChangeStatusCommand {
  @IsNotEmpty()
  id: string

  @IsNotEmpty()
  status: Status
}

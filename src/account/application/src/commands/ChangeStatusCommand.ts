import { IsNotEmpty } from 'class-validator'

import { Status }     from '@account/domain'

export class ChangeStatusCommand {
  @IsNotEmpty()
  id: string

  @IsNotEmpty()
  status: Status
}

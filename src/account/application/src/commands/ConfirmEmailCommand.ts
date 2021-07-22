import { IsNotEmpty } from 'class-validator'

export class ConfirmEmailCommand {
  @IsNotEmpty()
  id: string
}

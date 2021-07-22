import { IsNotEmpty } from 'class-validator'

export class ConfirmBirthdayCommand {
  @IsNotEmpty()
  id: string
}

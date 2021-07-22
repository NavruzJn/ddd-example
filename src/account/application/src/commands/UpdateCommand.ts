import { IsNotEmpty } from 'class-validator'

export class UpdateCommand {
  @IsNotEmpty()
  id: string

  @IsNotEmpty()
  firstname: string

  @IsNotEmpty()
  lastname: string

  @IsNotEmpty()
  email: string

  @IsNotEmpty()
  birthday: string
}

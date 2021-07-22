import { IsNotEmpty } from 'class-validator'

export class CreateCommand {
  @IsNotEmpty()
  firstname: string

  @IsNotEmpty()
  lastname: string

  @IsNotEmpty()
  password: string

  @IsNotEmpty()
  email: string

  @IsNotEmpty()
  birthday: string

  @IsNotEmpty()
  accountNumber: string

  @IsNotEmpty()
  currency: string
}

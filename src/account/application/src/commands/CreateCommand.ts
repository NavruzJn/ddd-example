import { Type }                                from 'class-transformer'
import { IsArray, IsNotEmpty, ValidateNested } from 'class-validator'

import { CreateRequisite }                     from './CreateRequisite'

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
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateRequisite)
  requisites: CreateRequisite[]
}

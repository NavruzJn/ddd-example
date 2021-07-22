import { IsNotEmpty } from 'class-validator'

export class GetCurrencyRate {
  @IsNotEmpty()
  from: string

  @IsNotEmpty()
  to: string
}

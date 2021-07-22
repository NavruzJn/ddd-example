import { MapValidationErrorsInterceptor }                        from '@atlantis-lab/nestjs-map-errors-interceptor'
import { GrpcMethod }                                            from '@nestjs/microservices'

import {
  AccountApplicationService,
  ChangeStatusCommand,
  ConfirmBirthdayCommand,
  ConfirmEmailCommand,
  CreateCommand,
  UpdateCommand,
} from '@account/application'
import { Controller, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common'

@UseInterceptors(MapValidationErrorsInterceptor)
@Controller()
export class AccountController {
  constructor(private readonly accountApplicationService: AccountApplicationService) {}

  @GrpcMethod('AccountService', 'CreateAccount')
  @UsePipes(new ValidationPipe({ transform: true }))
  async createAccount(command: CreateCommand) {
    const result = await this.accountApplicationService.create(command)
    return { result }
  }

  @GrpcMethod('AccountService', 'UpdateAccount')
  @UsePipes(new ValidationPipe({ transform: true }))
  async updateAccount(command: UpdateCommand) {
    const result = await this.accountApplicationService.update(command)
    return { result }
  }

  @GrpcMethod('AccountService', 'ConfirmBirthday')
  @UsePipes(new ValidationPipe({ transform: true }))
  async confirmBirthday(command: ConfirmBirthdayCommand) {
    const result = await this.accountApplicationService.confirmBirthday(command)
    return { result }
  }

  @GrpcMethod('AccountService', 'ConfirmEmail')
  @UsePipes(new ValidationPipe({ transform: true }))
  async verifyEmail(command: ConfirmEmailCommand) {
    const result = await this.accountApplicationService.confirmEmail(command)
    return { result }
  }

  @GrpcMethod('AccountService', 'ChangeStatus')
  @UsePipes(new ValidationPipe({ transform: true }))
  async registerAccount(command: ChangeStatusCommand) {
    const result = await this.accountApplicationService.changeStatus(command)
    return { result }
  }
}

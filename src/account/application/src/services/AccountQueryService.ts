import { AccountEntityRepository } from '@account/persistence'
import { Injectable }              from '@nestjs/common'

@Injectable()
export class AccountQueryService {
  constructor(private readonly accountEntityRepository: AccountEntityRepository) {}

  async getAccount(id) {
    return this.accountEntityRepository.getAccountById(id)
  }

  async getAccounts({ pager }) {
    return this.accountEntityRepository.getAccounts(pager)
  }
}

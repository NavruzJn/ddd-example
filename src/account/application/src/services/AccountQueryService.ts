import { AccountEntityRepository, RequisiteEntityRepository } from '@account/persistence'
import { Injectable }                                         from '@nestjs/common'

@Injectable()
export class AccountQueryService {
  constructor(
    private readonly accountEntityRepository: AccountEntityRepository,
    private readonly requisiteEntityRepository: RequisiteEntityRepository,
  ) {}

  async getAccount(id) {
    return this.accountEntityRepository.getAccountById(id)
  }

  async getAccounts({ pager }) {
    return this.accountEntityRepository.getAccounts(pager)
  }

  async getRequisiteByAccountNumber(accountNumber: string) {
    return this.requisiteEntityRepository.getRequisiteByAccountNumber(accountNumber)
  }
}

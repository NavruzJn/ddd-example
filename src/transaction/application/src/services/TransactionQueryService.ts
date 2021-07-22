import { Injectable }                  from '@nestjs/common'
import { TransactionEntityRepository } from '@transaction/persistence'

@Injectable()
export class TransactionQueryService {
  constructor(private readonly transactionEntityRepository: TransactionEntityRepository) {}

  async getTransaction(id) {
    return this.transactionEntityRepository.getTransactionById(id)
  }

  async getTransactions({ pager, filters }) {
    return this.transactionEntityRepository.getTransactions(pager, filters)
  }
}

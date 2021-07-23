import { Injectable }                  from '@nestjs/common'
import { TransactionEntityRepository } from '@transaction/persistence'

@Injectable()
export class TransactionQueryService {
  constructor(private readonly transactionEntityRepository: TransactionEntityRepository) {}

  async getTransaction(id) {
    const result = await this.transactionEntityRepository.getTransactionById(id)

    return { result }
  }

  async getTransactions({ pager, filters }) {
    return this.transactionEntityRepository.getTransactions(pager, filters)
  }
}

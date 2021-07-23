import * as grpc      from 'grpc'
import { Observable } from 'rxjs'
/** Namespace common. */
export namespace common {
  /** Contains all the RPC service clients. */
  export interface ClientFactory {}

  /** Builder for an RPC service server. */
  export interface ServerBuilder {}

  /** Properties of an Empty. */
  export interface Empty {}

  /** Properties of a Pager. */
  export interface Pager {
    /** Pager take */
    take?: number | null

    /** Pager offset */
    offset?: number | null
  }

  /** Properties of an Order. */
  export interface Order {
    /** Order by */
    by?: string | null

    /** Order direction */
    direction?: string | null
  }

  /** Properties of a PageInfo. */
  export interface PageInfo {
    /** PageInfo hasNext */
    hasNext?: boolean | null
  }
}

/** Namespace account. */
export namespace account {
  /** Contains all the RPC service clients. */
  export interface ClientFactory {
    /**
     * Returns the AccountService service client.
     */
    getAccountService(): account.AccountService
  }

  /** Builder for an RPC service server. */
  export interface ServerBuilder {
    /**
     * Adds a AccountService service implementation.
     * @param impl AccountService service implementation
     */
    addAccountService(impl: account.AccountService): account.ServerBuilder
  }

  /** Constructs a new AccountService service. */
  export interface AccountService {
    /**
     * Calls GetAccount.
     * @param request GetAccountRequest message or plain object
     * @param metadata Optional metadata
     * @returns Promise
     */
    getAccount(
      request: account.GetAccountRequest,
      metadata?: grpc.Metadata,
    ): Observable<account.GetAccountResponse>

    /**
     * Calls GetAccounts.
     * @param request Empty message or plain object
     * @param metadata Optional metadata
     * @returns Promise
     */
    getAccounts(
      request: common.Empty,
      metadata?: grpc.Metadata,
    ): Observable<account.GetAccountsResponse>

    /**
     * Calls CreateAccount.
     * @param request CreateAccountRequest message or plain object
     * @param metadata Optional metadata
     * @returns Promise
     */
    createAccount(
      request: account.CreateAccountRequest,
      metadata?: grpc.Metadata,
    ): Observable<account.CreateAccountResponse>

    /**
     * Calls UpdateAccount.
     * @param request UpdateAccountRequest message or plain object
     * @param metadata Optional metadata
     * @returns Promise
     */
    updateAccount(
      request: account.UpdateAccountRequest,
      metadata?: grpc.Metadata,
    ): Observable<account.UpdateAccountResponse>

    /**
     * Calls ConfirmBirthday.
     * @param request ConfirmBirthdayRequest message or plain object
     * @param metadata Optional metadata
     * @returns Promise
     */
    confirmBirthday(
      request: account.ConfirmBirthdayRequest,
      metadata?: grpc.Metadata,
    ): Observable<account.ConfirmBirthdayResponse>

    /**
     * Calls ConfirmEmail.
     * @param request ConfirmEmailRequest message or plain object
     * @param metadata Optional metadata
     * @returns Promise
     */
    confirmEmail(
      request: account.ConfirmEmailRequest,
      metadata?: grpc.Metadata,
    ): Observable<account.ConfirmBirthdayResponse>

    /**
     * Calls ChangeStatus.
     * @param request ChangeStatusRequest message or plain object
     * @param metadata Optional metadata
     * @returns Promise
     */
    changeStatus(
      request: account.ChangeStatusRequest,
      metadata?: grpc.Metadata,
    ): Observable<account.ChangeStatusResponse>
  }

  /** Status enum. */
  export enum Status {
    New = 0,
    Confirmed = 1,
    Banned = 2,
    Disabled = 3,
  }

  /** Properties of a Birthday. */
  export interface Birthday {
    /** Birthday date */
    date?: string | null

    /** Birthday confirmed */
    confirmed?: boolean | null
  }

  /** Properties of an Email. */
  export interface Email {
    /** Email address */
    address?: string | null

    /** Email confirmed */
    confirmed?: boolean | null
  }

  /** Properties of a Requisite. */
  export interface Requisite {
    /** Requisite accountNumber */
    accountNumber?: string | null

    /** Requisite currency */
    currency?: string | null

    /** Requisite balance */
    balance?: number | null
  }

  /** Properties of an Account. */
  export interface Account {
    /** Account id */
    id?: string | null

    /** Account firstname */
    firstname?: string | null

    /** Account lastname */
    lastname?: string | null

    /** Account password */
    password?: string | null

    /** Account lastSession */
    lastSession?: string | null

    /** Account email */
    email?: account.Email | null

    /** Account birthday */
    birthday?: account.Birthday | null

    /** Account requisites */
    requisites?: account.Requisite[] | null
  }

  /** Properties of a CreateAccountRequest. */
  export interface CreateAccountRequest {
    /** CreateAccountRequest firstname */
    firstname?: string | null

    /** CreateAccountRequest password */
    password?: string | null

    /** CreateAccountRequest birthday */
    birthday?: string | null

    /** CreateAccountRequest email */
    email?: string | null

    /** CreateAccountRequest lastname */
    lastname?: string | null

    /** CreateAccountRequest requisites */
    requisites?: account.Requisite[] | null
  }

  /** Properties of a CreateAccountErrors. */
  export interface CreateAccountErrors {
    /** CreateAccountErrors firstname */
    firstname?: string | null

    /** CreateAccountErrors password */
    password?: string | null

    /** CreateAccountErrors birthday */
    birthday?: string | null

    /** CreateAccountErrors email */
    email?: string | null

    /** CreateAccountErrors lastname */
    lastname?: string | null

    /** CreateAccountErrors requisites */
    requisites?: account.Requisite[] | null
  }

  /** Properties of a CreateAccountResponse. */
  export interface CreateAccountResponse {
    /** CreateAccountResponse errors */
    errors?: account.CreateAccountErrors | null

    /** CreateAccountResponse result */
    result?: account.Account | null
  }

  /** Properties of an UpdateAccountRequest. */
  export interface UpdateAccountRequest {
    /** UpdateAccountRequest id */
    id?: string | null

    /** UpdateAccountRequest firstname */
    firstname?: string | null

    /** UpdateAccountRequest birthday */
    birthday?: string | null

    /** UpdateAccountRequest email */
    email?: string | null

    /** UpdateAccountRequest lastname */
    lastname?: string | null
  }

  /** Properties of an UpdateAccountErrors. */
  export interface UpdateAccountErrors {
    /** UpdateAccountErrors id */
    id?: string | null

    /** UpdateAccountErrors firstname */
    firstname?: string | null

    /** UpdateAccountErrors lastname */
    lastname?: string | null

    /** UpdateAccountErrors birthday */
    birthday?: string | null

    /** UpdateAccountErrors email */
    email?: string | null
  }

  /** Properties of an UpdateAccountResponse. */
  export interface UpdateAccountResponse {
    /** UpdateAccountResponse errors */
    errors?: account.UpdateAccountErrors | null

    /** UpdateAccountResponse result */
    result?: account.Account | null
  }

  /** Properties of a GetAccountRequest. */
  export interface GetAccountRequest {
    /** GetAccountRequest id */
    id?: string | null
  }

  /** Properties of a GetAccountErrors. */
  export interface GetAccountErrors {
    /** GetAccountErrors id */
    id?: string | null
  }

  /** Properties of a GetAccountResponse. */
  export interface GetAccountResponse {
    /** GetAccountResponse errors */
    errors?: account.GetAccountErrors | null

    /** GetAccountResponse result */
    result?: account.Account | null
  }

  /** Properties of a GetAccountsErrors. */
  export interface GetAccountsErrors {
    /** GetAccountsErrors message */
    message?: string | null
  }

  /** Properties of a GetAccountsResponse. */
  export interface GetAccountsResponse {
    /** GetAccountsResponse errors */
    errors?: account.GetAccountsErrors | null

    /** GetAccountsResponse result */
    result?: account.Account[] | null
  }

  /** Properties of a ConfirmBirthdayRequest. */
  export interface ConfirmBirthdayRequest {
    /** ConfirmBirthdayRequest id */
    id?: string | null
  }

  /** Properties of a ConfirmBirthdayErrors. */
  export interface ConfirmBirthdayErrors {
    /** ConfirmBirthdayErrors id */
    id?: string | null
  }

  /** Properties of a ConfirmBirthdayResponse. */
  export interface ConfirmBirthdayResponse {
    /** ConfirmBirthdayResponse errors */
    errors?: account.ConfirmBirthdayErrors | null

    /** ConfirmBirthdayResponse result */
    result?: account.Account | null
  }

  /** Properties of a ConfirmEmailRequest. */
  export interface ConfirmEmailRequest {
    /** ConfirmEmailRequest id */
    id?: string | null
  }

  /** Properties of a ConfirmEmailErrors. */
  export interface ConfirmEmailErrors {
    /** ConfirmEmailErrors id */
    id?: string | null
  }

  /** Properties of a ConfirmEmailResponse. */
  export interface ConfirmEmailResponse {
    /** ConfirmEmailResponse errors */
    errors?: account.ConfirmEmailErrors | null

    /** ConfirmEmailResponse result */
    result?: account.Account | null
  }

  /** Properties of a ChangeStatusRequest. */
  export interface ChangeStatusRequest {
    /** ChangeStatusRequest id */
    id?: string | null

    /** ChangeStatusRequest status */
    status?: account.Status | null
  }

  /** Properties of a ChangeStatusErrors. */
  export interface ChangeStatusErrors {
    /** ChangeStatusErrors id */
    id?: string | null

    /** ChangeStatusErrors status */
    status?: account.Status | null
  }

  /** Properties of a ChangeStatusResponse. */
  export interface ChangeStatusResponse {
    /** ChangeStatusResponse errors */
    errors?: account.ChangeStatusErrors | null

    /** ChangeStatusResponse result */
    result?: account.Account | null
  }
}

/** Namespace transaction. */
export namespace transaction {
  /** Contains all the RPC service clients. */
  export interface ClientFactory {
    /**
     * Returns the TransactionService service client.
     */
    getTransactionService(): transaction.TransactionService
  }

  /** Builder for an RPC service server. */
  export interface ServerBuilder {
    /**
     * Adds a TransactionService service implementation.
     * @param impl TransactionService service implementation
     */
    addTransactionService(impl: transaction.TransactionService): transaction.ServerBuilder
  }

  /** Constructs a new TransactionService service. */
  export interface TransactionService {
    /**
     * Calls GetTransactions.
     * @param request GetTransactionsRequest message or plain object
     * @param metadata Optional metadata
     * @returns Promise
     */
    getTransactions(
      request: transaction.GetTransactionsRequest,
      metadata?: grpc.Metadata,
    ): Observable<transaction.GetTransactionsResponse>

    /**
     * Calls GetTransaction.
     * @param request GetTransactionRequest message or plain object
     * @param metadata Optional metadata
     * @returns Promise
     */
    getTransaction(
      request: transaction.GetTransactionRequest,
      metadata?: grpc.Metadata,
    ): Observable<transaction.GetTransactionResponse>

    /**
     * Calls CreateTransaction.
     * @param request CreateTransactionRequest message or plain object
     * @param metadata Optional metadata
     * @returns Promise
     */
    createTransaction(
      request: transaction.CreateTransactionRequest,
      metadata?: grpc.Metadata,
    ): Observable<transaction.CreateTransactionResponse>

    /**
     * Calls UpdateTransaction.
     * @param request UpdateTransactionRequest message or plain object
     * @param metadata Optional metadata
     * @returns Promise
     */
    updateTransaction(
      request: transaction.UpdateTransactionRequest,
      metadata?: grpc.Metadata,
    ): Observable<transaction.UpdateTransactionResponse>

    /**
     * Calls ChangeTransactionStatus.
     * @param request ChangeTransactionRequest message or plain object
     * @param metadata Optional metadata
     * @returns Promise
     */
    changeTransactionStatus(
      request: transaction.ChangeTransactionRequest,
      metadata?: grpc.Metadata,
    ): Observable<transaction.ChangeTransactionResponse>
  }

  /** Status enum. */
  export enum Status {
    New = 0,
    Succeeded = 1,
    Rejected = 2,
  }

  /** Type enum. */
  export enum Type {
    Conversion = 0,
    Transfer = 1,
  }

  /** Properties of a Transaction. */
  export interface Transaction {
    /** Transaction id */
    id?: string | null

    /** Transaction senderId */
    senderId?: string | null

    /** Transaction beneficiaryId */
    beneficiaryId?: string | null

    /** Transaction description */
    description?: string | null

    /** Transaction amount */
    amount?: number | null

    /** Transaction currency */
    currency?: string | null

    /** Transaction updatedAt */
    updatedAt?: string | null

    /** Transaction createAt */
    createAt?: string | null

    /** Transaction status */
    status?: transaction.Status | null

    /** Transaction type */
    type?: transaction.Type | null
  }

  /** Properties of a TransactionsOrder. */
  export interface TransactionsOrder {
    /** TransactionsOrder by */
    by?: string | null

    /** TransactionsOrder direction */
    direction?: string | null
  }

  /** Properties of a GetTransactionsRequest. */
  export interface GetTransactionsRequest {
    /** GetTransactionsRequest pager */
    pager?: common.Pager | null

    /** GetTransactionsRequest order */
    order?: transaction.TransactionsOrder | null
  }

  /** Properties of a GetTransactionsResponse. */
  export interface GetTransactionsResponse {
    /** GetTransactionsResponse result */
    result?: transaction.Transaction[] | null
  }

  /** Properties of a GetTransactionRequest. */
  export interface GetTransactionRequest {
    /** GetTransactionRequest id */
    id?: string | null
  }

  /** Properties of a GetTransactionErrors. */
  export interface GetTransactionErrors {
    /** GetTransactionErrors id */
    id?: string | null
  }

  /** Properties of a GetTransactionResponse. */
  export interface GetTransactionResponse {
    /** GetTransactionResponse errors */
    errors?: transaction.GetTransactionErrors | null

    /** GetTransactionResponse result */
    result?: transaction.Transaction | null
  }

  /** Properties of a CreateTransactionRequest. */
  export interface CreateTransactionRequest {
    /** CreateTransactionRequest senderId */
    senderId?: string | null

    /** CreateTransactionRequest beneficiaryId */
    beneficiaryId?: string | null

    /** CreateTransactionRequest description */
    description?: string | null

    /** CreateTransactionRequest amount */
    amount?: number | null

    /** CreateTransactionRequest currency */
    currency?: string | null

    /** CreateTransactionRequest type */
    type?: transaction.Type | null
  }

  /** Properties of a CreateTransactionErrors. */
  export interface CreateTransactionErrors {
    /** CreateTransactionErrors senderId */
    senderId?: string | null

    /** CreateTransactionErrors beneficiaryId */
    beneficiaryId?: string | null

    /** CreateTransactionErrors description */
    description?: string | null

    /** CreateTransactionErrors amount */
    amount?: number | null

    /** CreateTransactionErrors currency */
    currency?: string | null

    /** CreateTransactionErrors type */
    type?: transaction.Type | null
  }

  /** Properties of a CreateTransactionResponse. */
  export interface CreateTransactionResponse {
    /** CreateTransactionResponse errors */
    errors?: transaction.CreateTransactionErrors | null

    /** CreateTransactionResponse result */
    result?: transaction.Transaction | null
  }

  /** Properties of an UpdateTransactionRequest. */
  export interface UpdateTransactionRequest {
    /** UpdateTransactionRequest id */
    id?: string | null

    /** UpdateTransactionRequest beneficiaryId */
    beneficiaryId?: string | null

    /** UpdateTransactionRequest description */
    description?: string | null

    /** UpdateTransactionRequest amount */
    amount?: number | null

    /** UpdateTransactionRequest currency */
    currency?: string | null

    /** UpdateTransactionRequest type */
    type?: transaction.Type | null
  }

  /** Properties of an UpdateTransactionErrors. */
  export interface UpdateTransactionErrors {
    /** UpdateTransactionErrors id */
    id?: string | null

    /** UpdateTransactionErrors beneficiaryId */
    beneficiaryId?: string | null

    /** UpdateTransactionErrors description */
    description?: string | null

    /** UpdateTransactionErrors amount */
    amount?: number | null

    /** UpdateTransactionErrors currency */
    currency?: string | null

    /** UpdateTransactionErrors type */
    type?: transaction.Type | null
  }

  /** Properties of an UpdateTransactionResponse. */
  export interface UpdateTransactionResponse {
    /** UpdateTransactionResponse errors */
    errors?: transaction.UpdateTransactionErrors | null

    /** UpdateTransactionResponse result */
    result?: transaction.Transaction | null
  }

  /** Properties of a ChangeTransactionRequest. */
  export interface ChangeTransactionRequest {
    /** ChangeTransactionRequest id */
    id?: string | null

    /** ChangeTransactionRequest status */
    status?: transaction.Status | null
  }

  /** Properties of a ChangeTransactionErrors. */
  export interface ChangeTransactionErrors {
    /** ChangeTransactionErrors id */
    id?: string | null

    /** ChangeTransactionErrors status */
    status?: transaction.Status | null
  }

  /** Properties of a ChangeTransactionResponse. */
  export interface ChangeTransactionResponse {
    /** ChangeTransactionResponse errors */
    errors?: transaction.ChangeTransactionErrors | null

    /** ChangeTransactionResponse result */
    result?: transaction.Transaction | null
  }
}

/** Namespace currency. */
export namespace currency {
  /** Contains all the RPC service clients. */
  export interface ClientFactory {
    /**
     * Returns the CurrencyService service client.
     */
    getCurrencyService(): currency.CurrencyService
  }

  /** Builder for an RPC service server. */
  export interface ServerBuilder {
    /**
     * Adds a CurrencyService service implementation.
     * @param impl CurrencyService service implementation
     */
    addCurrencyService(impl: currency.CurrencyService): currency.ServerBuilder
  }

  /** Constructs a new CurrencyService service. */
  export interface CurrencyService {
    /**
     * Calls GetCurrencies.
     * @param request Empty message or plain object
     * @param metadata Optional metadata
     * @returns Promise
     */
    getCurrencies(
      request: common.Empty,
      metadata?: grpc.Metadata,
    ): Observable<currency.GetCurrencies>

    /**
     * Calls GetCurrencyRate.
     * @param request GetCurrencyRateRequest message or plain object
     * @param metadata Optional metadata
     * @returns Promise
     */
    getCurrencyRate(
      request: currency.GetCurrencyRateRequest,
      metadata?: grpc.Metadata,
    ): Observable<currency.GetCurrencyRateResponse>
  }

  /** Properties of a Currency. */
  export interface Currency {
    /** Currency code */
    code?: string | null

    /** Currency name */
    name?: string | null
  }

  /** Properties of a CurrencyRate. */
  export interface CurrencyRate {
    /** CurrencyRate from */
    from?: string | null

    /** CurrencyRate to */
    to?: string | null

    /** CurrencyRate rate */
    rate?: number | null
  }

  /** Properties of a GetCurrencyRateRequest. */
  export interface GetCurrencyRateRequest {
    /** GetCurrencyRateRequest from */
    from?: string | null

    /** GetCurrencyRateRequest to */
    to?: string | null
  }

  /** Properties of a GetCurrencyRateErrors. */
  export interface GetCurrencyRateErrors {
    /** GetCurrencyRateErrors from */
    from?: string | null

    /** GetCurrencyRateErrors to */
    to?: string | null
  }

  /** Properties of a GetCurrencyRateResponse. */
  export interface GetCurrencyRateResponse {
    /** GetCurrencyRateResponse errors */
    errors?: currency.GetCurrencyRateErrors | null

    /** GetCurrencyRateResponse result */
    result?: currency.CurrencyRate | null
  }

  /** Properties of a GetCurrencies. */
  export interface GetCurrencies {
    /** GetCurrencies result */
    result?: currency.Currency[] | null
  }
}

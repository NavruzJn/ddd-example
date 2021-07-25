import 'reflect-metadata'

import { ServiceModule }                   from '@account/service/src/module'
import { Logger }                          from '@monstrs/nestjs-logger'
import { ClientsModule, NestMicroservice } from '@nestjs/microservices'
import { Test }                            from '@nestjs/testing'
import { BUS_SYMBOLS, HandlerRegistry }    from '@node-ts/bus-core'
import { MemoryQueue }                     from '@node-ts/bus-core/dist/transport'
import { Repository }                      from 'typeorm'
import { getRepositoryToken }              from '@nestjs/typeorm'

import { Status }                          from '@account/domain'
import { Account }                         from '@account/persistence'
import { clientOptions, serverOptions }    from '@protos/account'
import { account }                         from '@protos/interfaces'

describe('account-service', () => {
  let app: NestMicroservice
  let accountService: account.AccountService
  let repository: Repository<Account>

  const testAccount: Account = {
    createdAt: new Date(),
    lastSession: new Date(),
    status: Status.New,
    updatedAt: new Date(),
    requisites: [
      {
        id: 'df3cfcf1-58a6-4975-8e4f-41a76c21eb81',
        accountNumber: 'test_1',
        currency: 'USD',
        balance: 1235,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    id: 'd7a79509-bafe-4f00-944a-459632cc7ced',
    firstname: 'John',
    lastname: 'Smith',
    password: '76543',
    // @ts-ignore
    email: {
      address: 'john@test.com',
      confirmed: false,
    },
    // @ts-ignore
    birthday: {
      date: new Date(),
      confirmed: false,
    },
  }

  beforeAll(async () => {
    const accountClientOptions: any = {
      name: 'client',
      ...clientOptions,
      options: {
        ...clientOptions.options,
        url: '0.0.0.0:50051',
      },
    }

    const logger = new Logger()
    const handlerRegistry = new HandlerRegistry(logger)

    const module: any = await Test.createTestingModule({
      imports: [ServiceModule, ClientsModule.register([accountClientOptions])],
    })
      .overrideProvider(BUS_SYMBOLS.Transport)
      .useValue(new MemoryQueue(logger, handlerRegistry))
      .compile()

    app = module.createNestMicroservice(serverOptions)

    await app.listenAsync()

    accountService = app.get('client').getService('AccountService')
    repository = app.get<Repository<Account>>(getRepositoryToken(Account))
  })

  afterAll(async () => {
    await app.close()
  })

  it('create', async () => {
    const newIdentity = await accountService.createAccount({
      firstname: 'John',
      lastname: 'Smith',
      password: '76543',
      email: 'john@test.com',
      birthday: '03-21-1996',
      requisites: [
        {
          accountNumber: 'test_1',
          balance: 1235,
          currency: 'USD',
        },
      ],
    })

    jest.spyOn(repository, 'save').mockResolvedValueOnce(testAccount)

    newIdentity.subscribe(response => {
      expect(response.result).toEqual(testAccount)
    })
  })
})

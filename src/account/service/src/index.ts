import { NestFactory }   from '@nestjs/core'
import { useContainer }  from 'class-validator'

import { serverOptions } from '@protos/account'

import { ServiceModule } from './module'

declare const module: any

const bootstrap = async () => {
  const app = await NestFactory.createMicroservice(ServiceModule, serverOptions)

  useContainer(app.select(ServiceModule), {
    fallback: true,
    fallbackOnErrors: true,
  })

  await app.listen()

  if (module.hot) {
    module.hot.accept()
    module.hot.dispose(() => app.close())
  }
}

bootstrap()

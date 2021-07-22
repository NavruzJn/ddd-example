import { ConfigService }  from '@nestjs/config'
import { NestFactory }    from '@nestjs/core'

import { ValidationPipe } from '@nestjs/common'

import { AppModule }      from './module'

// @ts-ignore
async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  // enable shutdown hooks explicitly.
  app.enableShutdownHooks()

  app.useGlobalPipes(new ValidationPipe())
  app.enableCors()
  // app.useLogger();
  const configService = app.get<ConfigService>(ConfigService)
  await app.listen(configService.get<number>('app.port') || 30000)
}

bootstrap()

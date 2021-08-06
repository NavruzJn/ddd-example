import { BOOT, IBoot }    from '@nestcloud/common'
import { NestLogger }     from '@nestcloud/logger'
import { NestFactory }    from '@nestjs/core'
import { resolve }        from 'path'

import { ValidationPipe } from '@nestjs/common'

import { AppModule }      from './module'

// @ts-ignore

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: new NestLogger({ filePath: resolve(__dirname, '../config.yaml') }),
  })

  process.on('SIGINT', async () => {
    setTimeout(() => process.exit(1), 5000)
    await app.close()
    process.exit(0)
  })

  // kill -15
  process.on('SIGTERM', async () => {
    setTimeout(() => process.exit(1), 5000)
    await app.close()
    process.exit(0)
  })

  const boot: IBoot = app.get(BOOT)
  app.useGlobalPipes(new ValidationPipe())
  await app.listen(boot.get('service.port', 3000))
}

bootstrap()

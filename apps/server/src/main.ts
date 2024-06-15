import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ConfigService } from '@nestjs/config'
import * as cookieParser from 'cookie-parser'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { ENodeEnv } from './common/enums'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)
	app.use(cookieParser())
	app.setGlobalPrefix('/api')

	const configService = app.get(ConfigService)
	const CLIENT_URL = configService.get('CLIENT_URL')
	const SERVER_PORT = configService.get('SERVER_PORT')
	const NODE_ENV = configService.get('NODE_ENV')

	app.enableCors({
		origin: CLIENT_URL,
		credentials: true
	})

	const config = new DocumentBuilder().setTitle('Nightmess').build()

	if (NODE_ENV !== ENodeEnv.production) {
		const document = SwaggerModule.createDocument(app, config)
		SwaggerModule.setup('api/docs', app, document)
	}

	await app.listen(SERVER_PORT)

	console.log(`App start on port: ${SERVER_PORT}`)
}
bootstrap()

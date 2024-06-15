import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ConfigService } from '@nestjs/config'
import * as cookieParser from 'cookie-parser'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)
	app.use(cookieParser())
	app.setGlobalPrefix('/api')

	const configService = app.get(ConfigService)
	const CLIENT_URL = configService.get('CLIENT_URL')
	const SERVER_PORT = configService.get('SERVER_PORT')

	app.enableCors({
		origin: CLIENT_URL,
		credentials: true
	})

	await app.listen(SERVER_PORT)

	console.log(`App start on port: ${SERVER_PORT}`)
}
bootstrap()

import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ConfigService } from '@nestjs/config'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)
	app.setGlobalPrefix('/api')

	const configService = app.get(ConfigService)

	const SERVER_PORT = configService.get('SERVER_PORT')

	await app.listen(SERVER_PORT)

	console.log(`App start on port: ${SERVER_PORT}`)
}
bootstrap()

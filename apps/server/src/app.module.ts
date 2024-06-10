import { Module } from '@nestjs/common'
import { BotModule } from './bot/bot.module'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { EnvConfigOptions, getBotConfig } from './configs'

@Module({
	imports: [
		ConfigModule.forRoot(EnvConfigOptions),
		BotModule.forRootAsync({
			imports: [BotModule],
			inject: [ConfigService],
			useFactory: getBotConfig
		})
	]
})
export class AppModule {}

import { Module } from '@nestjs/common'
import { BotModule } from './bot/bot.module'
import { DatabaseModule } from './core/database'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { EnvConfigOptions, getBotConfig } from './configs'
import { UserModule } from './modules/user/user.module'
import { AuthModule } from './auth/auth.module'

@Module({
	imports: [
		ConfigModule.forRoot(EnvConfigOptions),
		BotModule.forRootAsync({
			imports: [BotModule],
			inject: [ConfigService],
			useFactory: getBotConfig
		}),
		DatabaseModule,
		UserModule,
		AuthModule
	]
})
export class AppModule {}

import { Module } from '@nestjs/common'
import { BotModule } from './bot/bot.module'
import { DatabaseModule } from './core/database'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { EnvConfigOptions, getBotConfig } from './configs'
import { UserModule } from './modules/user/user.module'
import { AuthModule } from './auth/auth.module'
import { SettingsModule } from './modules/settings/settings.module'
import { CardModule } from './modules/card/card.module'
import { GameModule } from './modules/game/game.module'
import { ServeStaticModule } from '@nestjs/serve-static'
import { join } from 'path'

@Module({
	imports: [
		ConfigModule.forRoot(EnvConfigOptions),
		BotModule.forRootAsync({
			imports: [BotModule, AuthModule],
			inject: [ConfigService],
			useFactory: getBotConfig
		}),
		DatabaseModule,
		UserModule,
		AuthModule,
		SettingsModule,
		CardModule,
		GameModule,
		ServeStaticModule.forRoot({
			rootPath: join(__dirname, '..', 'static'),
			serveRoot: '/api/static'
		})
	]
})
export class AppModule {}

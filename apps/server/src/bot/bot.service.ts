import { Inject, Injectable } from '@nestjs/common'
import * as TelegramBot from 'node-telegram-bot-api'
import { BOT_MODULE_OPTIONS } from './bot.constants'
import type { IBotOptions } from './bot.interface'
import { BotStartCommand, Command, AuthCommand, InventoryCommand } from './commands'
import { AuthService } from '@/auth/auth.service'
import { ConfigService } from '@nestjs/config'
import { GameService } from '@/modules/game/game.service'
import { CacheService } from '@/core/cache/cache.service'

@Injectable()
export class BotService {
	public bot: TelegramBot
	private commands: Command[]

	constructor(
		@Inject(BOT_MODULE_OPTIONS) options: IBotOptions,
		private readonly authService: AuthService,
		private readonly configService: ConfigService,
		private readonly gameService: GameService,
		private readonly cacheService: CacheService
	) {
		// this.bot = new TelegramBot(options.token, { polling: true })
		this.commands = [
			new BotStartCommand(this.bot, this.authService),
			new AuthCommand(this.bot, this.authService, this.configService),
			new InventoryCommand(this.bot, this.gameService, this.cacheService, this.configService)
		]
		// this.init()
	}

	private init() {
		for (const command of this.commands) {
			command.handle()
		}
	}
}

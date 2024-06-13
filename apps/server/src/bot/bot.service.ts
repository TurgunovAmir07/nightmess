import { Inject, Injectable } from '@nestjs/common'
import { Telegraf, Scenes, Middleware, session } from 'telegraf'
import { BOT_MODULE_OPTIONS } from './bot.constants'
import type { IBotOptions } from './bot.interface'
import { BotStartCommand, Command } from './commands'
import { AuthScene } from './scenes'
import { IBotContext } from './context'
import { AuthService } from '@/auth/auth.service'
import { ConfigService } from '@nestjs/config'

@Injectable()
export class BotService {
	public bot: Telegraf<IBotContext>
	private commands: Command[]
	private stage: Middleware<IBotContext>

	constructor(
		@Inject(BOT_MODULE_OPTIONS) options: IBotOptions,
		private readonly authService: AuthService,
		private readonly configService: ConfigService
	) {
		this.bot = new Telegraf(options.token)
		this.commands = [new BotStartCommand(this.bot)]
		this.stage = new Scenes.Stage([new AuthScene(this.authService, this.configService).scene])
		this.init()
		process.once('SIGINT', () => this.bot.stop('SIGINT'))
		process.once('SIGTERM', () => this.bot.stop('SIGTERM'))
	}

	private init() {
		this.bot.use(session())
		// @ts-expect-error fix!
		this.bot.use(this.stage.middleware())
		for (const command of this.commands) {
			command.handle()
		}

		this.bot.launch()
	}
}

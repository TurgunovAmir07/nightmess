import { Inject, Injectable } from '@nestjs/common'
import { Telegraf, Scenes, Middleware, session, SessionStore } from 'telegraf'
import { BOT_MODULE_OPTIONS } from './bot.constants'
import type { IBotOptions } from './bot.interface'
import { BotStartCommand, Command } from './commands'
import { AuthScene } from './scenes'
import { IBotContext, ISessionData } from './context'
import { AuthService } from '@/auth/auth.service'
import { ConfigService } from '@nestjs/config'
import { getRedisConfig } from '@/configs'
import { Redis } from '@telegraf/session/redis'

@Injectable()
export class BotService {
	public bot: Telegraf<IBotContext>
	private commands: Command[]
	private stage: Middleware<IBotContext>
	private store: SessionStore<ISessionData>

	constructor(
		@Inject(BOT_MODULE_OPTIONS) options: IBotOptions,
		private readonly authService: AuthService,
		private readonly configService: ConfigService
	) {
		this.bot = new Telegraf(options.token)
		this.commands = [new BotStartCommand(this.bot, this.authService)]
		this.stage = new Scenes.Stage([new AuthScene(this.authService, this.configService).scene])
		this.store = Redis(getRedisConfig(this.configService))
		this.init()
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

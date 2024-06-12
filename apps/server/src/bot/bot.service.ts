import { Inject, Injectable } from '@nestjs/common'
import { Telegraf, Scenes, Middleware, session } from 'telegraf'
import { BOT_MODULE_OPTIONS } from './bot.constants'
import type { IBotOptions } from './bot.interface'
import { BotStartCommand, Command } from './commands'
import { AuthScene } from './scenes'
import { IBotContext } from './context'

@Injectable()
export class BotService {
	public bot: Telegraf<IBotContext>
	private commands: Command[]
	private stage: Middleware<IBotContext>

	constructor(@Inject(BOT_MODULE_OPTIONS) options: IBotOptions) {
		this.bot = new Telegraf(options.token)
		this.commands = [new BotStartCommand(this.bot)]
		this.stage = new Scenes.Stage([new AuthScene().scene])
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

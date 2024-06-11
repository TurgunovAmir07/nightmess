import { Inject, Injectable } from '@nestjs/common'
import { Telegraf, Scenes, Middleware } from 'telegraf'
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
		// @ts-expect-error fix!!
		this.stage = new Scenes.Stage([new AuthScene().scene])
		this.init()
	}

	private init() {
		for (const command of this.commands) {
			command.handle()
		}
		this.bot.launch()
		this.bot.use(this.stage)
	}
}

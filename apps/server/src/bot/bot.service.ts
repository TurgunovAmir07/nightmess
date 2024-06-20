import { Inject, Injectable } from '@nestjs/common'
import * as TelegramBot from 'node-telegram-bot-api'
import { BOT_MODULE_OPTIONS } from './bot.constants'
import type { IBotOptions } from './bot.interface'
import { BotStartCommand, Command } from './commands'

@Injectable()
export class BotService {
	public bot: TelegramBot
	private commands: Command[]

	constructor(@Inject(BOT_MODULE_OPTIONS) options: IBotOptions) {
		this.bot = new TelegramBot(options.token, { polling: true })
		this.commands = [new BotStartCommand(this.bot)]
		this.init()
	}

	private init() {
		for (const command of this.commands) {
			command.handle()
		}
	}
}

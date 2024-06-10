import { Inject, Injectable } from '@nestjs/common'
import { Telegraf } from 'telegraf'
import { BOT_MODULE_OPTIONS } from './bot.constants'
import type { IBotOptions } from './bot.interface'

@Injectable()
export class BotService {
	bot: Telegraf
	constructor(@Inject(BOT_MODULE_OPTIONS) options: IBotOptions) {
		this.bot = new Telegraf(options.token)
		this.init()
	}

	init() {
		this.bot.launch()
	}
}

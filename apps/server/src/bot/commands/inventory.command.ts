import TelegramBot from 'node-telegram-bot-api'
import { Command } from './abstract.command'
import { getCommandRegexp } from '../utils'
import { INVENTORY_COMMAND } from '../bot.constants'

export class InventoryCommand extends Command {
	constructor(bot: TelegramBot) {
		super(bot)
	}

	public handle(): void {
		this.bot.onText(getCommandRegexp(INVENTORY_COMMAND), msg => {
			console.log('Инвентарь')
		})
	}
}

import TelegramBot from 'node-telegram-bot-api'
import { Command } from './abstract.command'
import { getCommandRegexp } from '../utils'
import { INVENTORY_COMMAND } from '../bot.constants'
import { GET_CARD, SHOW_INVENTORY } from '../bot.constants'
import { GameService } from '@/modules/game/game.service'
import { botUserMiddleware } from '../middlewares'

export class InventoryCommand extends Command {
	constructor(
		public readonly bot: TelegramBot,
		private readonly gameService: GameService
	) {
		super(bot)
	}

	public handle(): void {
		this.bot.onText(getCommandRegexp(INVENTORY_COMMAND), msg => {
			this.bot.sendMessage(msg.chat.id, 'Выберите нужный раздел:', {
				reply_markup: {
					resize_keyboard: true,
					keyboard: [[{ text: GET_CARD }], [{ text: SHOW_INVENTORY }]]
				}
			})
		})

		this.bot.onText(getCommandRegexp(GET_CARD), msg => {
			console.log(msg)
		})
		this.bot.onText(getCommandRegexp(SHOW_INVENTORY), async msg => {
			const inventory = await this.gameService.getInventory(1)
		})
	}
}

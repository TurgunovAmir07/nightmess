import TelegramBot from 'node-telegram-bot-api'
import { Command } from './abstract.command'
import { getCommandRegexp, formatInventory, formatTapResponse } from '../utils'
import { INVENTORY_COMMAND } from '../bot.constants'
import { GET_CARD, SHOW_INVENTORY } from '../bot.constants'
import { GameService } from '@/modules/game/game.service'
import { CacheService } from '@/core/cache/cache.service'
import { ConfigService } from '@nestjs/config'

export class InventoryCommand extends Command {
	constructor(
		public readonly bot: TelegramBot,
		private readonly gameService: GameService,
		private readonly cacheService: CacheService,
		private readonly configService: ConfigService
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

		this.bot.onText(getCommandRegexp(GET_CARD), async msg => {
			const userId = await this.cacheService.get(String(msg.from.id))

			if (!userId) {
				this.bot.sendMessage(msg.chat.id, 'Пользователь не найден. Начните чат заново :(')
			}

			return this.gameService
				.tap(+userId)
				.then(res => {
					if (!res.card) {
						this.bot.sendMessage(msg.chat.id, res.message)
					} else {
						const url =
							this.configService.get('VITE_SERVER_STATIC_URL') +
							'/' +
							res.card.card.image

						this.bot.sendPhoto(msg.chat.id, url, {
							caption: formatTapResponse(res)
						})
					}
				})
				.catch(e => {
					console.log(e)
					this.bot.sendMessage(msg.chat.id, e.response?.message ?? 'Неожиданная ошибка')
				})
		})
		this.bot.onText(getCommandRegexp(SHOW_INVENTORY), async msg => {
			const userId = await this.cacheService.get(String(msg.from.id))

			if (!userId) {
				this.bot.sendMessage(msg.chat.id, 'Пользователь не найден. Начните чат заново :(')
			}

			this.gameService
				.getInventory(+userId)
				.then(res => this.bot.sendMessage(msg.chat.id, formatInventory(res)))
				.catch(e =>
					this.bot.sendMessage(msg.chat.id, e.response.message ?? 'Неожиданная ошибка')
				)
		})
	}
}

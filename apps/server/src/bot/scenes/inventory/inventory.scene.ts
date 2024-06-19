import { WizardScene } from 'telegraf/typings/scenes'
import { Scene } from '../abstract'
import { IBotContext } from '../../context'
import { Composer, Markup, Scenes } from 'telegraf'
import { GET_CARD, INVENTORY_SCENE, SHOW_INVENTORY } from '../../bot.constants'
import { GameService } from '@/modules/game/game.service'
import { formatInventory, formatTapResponse } from './utils'
import { ConfigService } from '@nestjs/config'

export class InventoryScene extends Scene {
	public scene: WizardScene<IBotContext>
	public composer: Composer<IBotContext>

	constructor(
		private readonly gameService: GameService,
		private readonly configService: ConfigService
	) {
		super()
		this.composer = new Composer<IBotContext>()
		this.scene = new Scenes.WizardScene(INVENTORY_SCENE, async ctx => {
			await ctx.reply(
				'Выберите интересующий Вас раздел:',
				Markup.keyboard([
					Markup.button.text(GET_CARD),
					Markup.button.text(SHOW_INVENTORY)
				]).resize()
			)
			return ctx.wizard.next()
		})
		this.handle()
	}

	public handle(): void {
		this.scene.hears(GET_CARD, async ctx => {
			return this.gameService
				.tap(ctx.session.userId)
				.then(async res => {
					if (!res.card) {
						return ctx.reply(res.message)
					} else {
						console.log(
							this.configService.get('VITE_SERVER_STATIC_URL') +
								'/' +
								res.card.card.image
						)
						return ctx.replyWithPhoto(
							{
								url:
									this.configService.get('VITE_SERVER_STATIC_URL') +
									'/' +
									res.card.card.image
							},
							{
								// @ts-expect-error card always exist after check
								caption: formatTapResponse(res)
							}
						)
					}
				})
				.catch(e => {
					console.log(e)
					return ctx.reply(e.response?.message ?? 'Неожиданная ошибка')
				})
		})
		this.scene.hears(SHOW_INVENTORY, async ctx => {
			const inventory = await this.gameService.getInventory(ctx.session.userId)

			return ctx.reply(formatInventory(inventory))
		})
	}
}

import { WizardScene } from 'telegraf/typings/scenes'
import { Scene } from '../abstract'
import { IBotContext } from '../../context'
import { Composer, Markup, Scenes } from 'telegraf'
import { GET_CARD, INVENTORY_SCENE, SHOW_INVENTORY } from '../../bot.constants'
import { GameService } from '@/modules/game/game.service'
import { formatTapResponse } from './utils'

export class InventoryScene extends Scene {
	public scene: WizardScene<IBotContext>
	public composer: Composer<IBotContext>

	constructor(private readonly gameService: GameService) {
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
						// @ts-expect-error card is exist after check !res.card
						return ctx.reply(formatTapResponse(res))
					}
				})
				.catch(e => ctx.reply(e.response.message))
		})
		this.scene.hears(SHOW_INVENTORY, async ctx => {
			return ctx.reply('Показать инвентарь')
		})
	}
}

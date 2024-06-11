import { Composer, Markup, Scenes } from 'telegraf'
import { Scene } from './abstract.scene'
import { WizardScene } from 'telegraf/typings/scenes'
import { IBotContext } from '../context'
import { AUTH_SCENE_GENERATE_LINK, AUTH_SCENE } from '../bot.constants'

export class AuthScene extends Scene {
	public scene: WizardScene<IBotContext>
	public composer: Composer<IBotContext>

	constructor() {
		super()
		this.composer = new Composer<IBotContext>()
		this.scene = new Scenes.WizardScene(AUTH_SCENE, async ctx => {
			await ctx.reply(
				'Выберите раздел авторизации:',
				Markup.inlineKeyboard([
					Markup.button.callback('Авторизоваться через браузер', AUTH_SCENE_GENERATE_LINK)
				])
			)
			return ctx.wizard.next()
		})
		this.handle()
	}

	public handle() {
		this.scene.action(AUTH_SCENE_GENERATE_LINK, async ctx => {
			console.log(ctx.from)
			return ctx.wizard.next()
		})
	}
}

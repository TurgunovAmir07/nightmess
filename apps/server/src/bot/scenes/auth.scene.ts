import { Composer, Markup, Scenes } from 'telegraf'
import { Scene } from './abstract.scene'
import { WizardScene } from 'telegraf/typings/scenes'
import { IBotContext } from '../context'
import { AUTH_SCENE_GENERATE_LINK, AUTH_SCENE } from '../bot.constants'
import { AuthService } from '@/auth/auth.service'

export class AuthScene extends Scene {
	public scene: WizardScene<IBotContext>
	public composer: Composer<IBotContext>

	constructor(private readonly authService: AuthService) {
		super()
		this.composer = new Composer<IBotContext>()
		this.scene = new Scenes.WizardScene(AUTH_SCENE, async ctx => {
			await ctx.reply(
				'Выберите раздел авторизации:',
				Markup.keyboard([Markup.button.text(AUTH_SCENE_GENERATE_LINK)])
			)
			return ctx.wizard.next()
		})
		this.handle()
	}

	public handle() {
		this.scene.hears(AUTH_SCENE_GENERATE_LINK, async ctx => {
			const { link } = await this.authService.login(String(ctx.from.id))

			console.log(link)

			await ctx.reply(
				'Нажмите на ссылку ниже',
				Markup.inlineKeyboard([Markup.button.url('Авторизоваться', 'https://ya.ru')])
			)
			return ctx.wizard.next()
		})
	}
}

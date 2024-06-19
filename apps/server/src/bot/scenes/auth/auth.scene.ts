import { Composer, Markup, Scenes } from 'telegraf'
import { Scene } from '../abstract'
import { WizardScene } from 'telegraf/typings/scenes'
import { IBotContext } from '../../context'
import { AUTH_SCENE } from '../../bot.constants'
import { AuthService } from '@/auth/auth.service'
import { ConfigService } from '@nestjs/config'

export class AuthScene extends Scene {
	public scene: WizardScene<IBotContext>
	public composer: Composer<IBotContext>

	constructor(
		private readonly authService: AuthService,
		private readonly configService: ConfigService
	) {
		super()
		this.composer = new Composer<IBotContext>()
		this.scene = new Scenes.WizardScene(AUTH_SCENE, async ctx => {
			this.authService
				.login(String(ctx.from.id))
				.then(async res => {
					const { link } = res

					// DON'T TOUCH ONLY FOR DEV
					console.log(link, 'link')

					await ctx.reply(
						'Нажмите на ссылку ниже',
						Markup.inlineKeyboard([
							Markup.button.url(
								'Авторизоваться',
								this.configService.get('NODE_ENV') === 'production'
									? link
									: 'https://ya.ru'
							)
						])
					)
				})
				.catch(async e => await ctx.reply(e.response.message ?? 'Неожиданная ошибка'))

			return ctx.wizard.next()
		})

		this.handle()
	}

	public handle() {}
}

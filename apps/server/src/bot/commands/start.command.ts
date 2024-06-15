import { Markup, Telegraf } from 'telegraf'
import { Command } from './abstract.command'
import { IBotContext } from '../context'
import { AUTH_SCENE, AUTH_SCENE_ENTER } from '../bot.constants'
import { AuthService } from '@/auth/auth.service'

export class BotStartCommand extends Command {
	constructor(
		bot: Telegraf<IBotContext>,
		private readonly authService: AuthService
	) {
		super(bot)
	}

	public handle(): void {
		this.bot.start(async ctx => {
			const user = await this.authService.registration(String(ctx.from.id))

			console.log(user, 'user')

			return ctx.reply(
				'Добро пожаловать в Nightmess Bot! Выберите интересующий Вас модуль:',
				Markup.keyboard([
					Markup.button.text(AUTH_SCENE_ENTER)
					// {
					// 	text: 'Вход в web-app',
					// 	web_app: {
					// 		url: 'http://localhost:3000'
					// 	}
					// }
				])
			)
		})

		this.bot.hears(AUTH_SCENE_ENTER, ctx => ctx.scene.enter(AUTH_SCENE))
	}
}

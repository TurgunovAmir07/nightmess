import { Telegraf } from 'telegraf'
import { Command } from './abstract.command'
import { IBotContext } from '../context'
import {
	AUTH_SCENE,
	AUTH_SCENE_ENTER,
	INVENTORY_SCENE,
	INVENTORY_SCENE_ENTER
} from '../bot.constants'
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

			ctx.session.userId = user.id

			this.bot.telegram.setMyCommands([
				{
					command: AUTH_SCENE_ENTER,
					description: 'Авторизация'
				},
				{
					command: INVENTORY_SCENE_ENTER,
					description: 'Инвентарь'
				}
			])

			return ctx.reply(
				'Добро пожаловать в Nightmess Bot! Выберите интересующий Вас модуль в меню'
			)

			// {
			// 	text: 'Вход в web-app',
			// 	web_app: {
			// 		url: 'http://localhost:3000'
			// }
		})

		this.bot.command(AUTH_SCENE_ENTER, ctx => ctx.scene.enter(AUTH_SCENE))
		this.bot.command(INVENTORY_SCENE_ENTER, ctx => ctx.scene.enter(INVENTORY_SCENE))
	}
}

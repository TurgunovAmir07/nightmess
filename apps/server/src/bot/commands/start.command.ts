import { Markup, Telegraf } from 'telegraf'
import { Command } from './abstract.command'
import { IBotContext } from '../context'

export class BotStartCommand extends Command {
	constructor(bot: Telegraf<IBotContext>) {
		super(bot)
	}

	public handle(): void {
		this.bot.start(
			async ctx =>
				await ctx.reply(
					'Добро пожаловать в Nightmess Bot! Выберите интересующий Вас модуль:',
					Markup.inlineKeyboard([Markup.button.callback('Авторизация', 'auth_scene')])
				)
		)

		this.bot.action('auth_scene', ctx => ctx.scene.enter('auth_scene'))
	}
}

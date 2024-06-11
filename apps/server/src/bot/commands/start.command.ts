import { Markup, Telegraf } from 'telegraf'
import { Command } from './abstract.command'
import { IBotContext } from '../context'
import { AUTH_SCENE, AUTH_SCENE_ENTER } from '../bot.constants'

export class BotStartCommand extends Command {
	constructor(bot: Telegraf<IBotContext>) {
		super(bot)
	}

	public handle(): void {
		this.bot.start(
			async ctx =>
				await ctx.reply(
					'Добро пожаловать в Nightmess Bot! Выберите интересующий Вас модуль:',
					Markup.inlineKeyboard([Markup.button.callback('Авторизация', AUTH_SCENE_ENTER)])
				)
		)

		this.bot.action(AUTH_SCENE_ENTER, ctx => ctx.scene.enter(AUTH_SCENE))
	}
}

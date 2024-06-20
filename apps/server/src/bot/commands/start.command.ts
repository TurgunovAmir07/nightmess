import { AUTH_COMMAND, INVENTORY_COMMAND } from '../bot.constants'
import { Command } from './abstract.command'
import TelegramBot from 'node-telegram-bot-api'

export class BotStartCommand extends Command {
	constructor(public readonly bot: TelegramBot) {
		super(bot)
	}

	public handle(): void {
		this.bot.onText(/\/start/, msg => {
			this.bot.sendMessage(
				msg.chat.id,
				'Добро пожаловать в Nightmess Bot! Выберите интересующий Вас модуль в меню'
			)
			this.bot.setMyCommands([
				{
					command: AUTH_COMMAND,
					description: 'Авторизация'
				},
				{
					command: INVENTORY_COMMAND,
					description: 'Инвентарь'
				}
			])
		})
	}
}

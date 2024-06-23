import TelegramBot from 'node-telegram-bot-api'
import { Command } from './abstract.command'
import { AUTH_COMMAND } from '../bot.constants'
import { getCommandRegexp } from '../utils'
import { AuthService } from '@/auth/auth.service'
import { ConfigService } from '@nestjs/config'

export class AuthCommand extends Command {
	constructor(
		public readonly bot: TelegramBot,
		private readonly authService: AuthService,
		private readonly configService: ConfigService
	) {
		super(bot)
	}

	public handle(): void {
		this.bot.onText(getCommandRegexp(AUTH_COMMAND), async msg => {
			this.bot.sendMessage(msg.chat.id, 'Ожидайте...', {
				reply_markup: {
					remove_keyboard: true
				}
			})
			this.authService
				.login(String(msg.from.id), 'app')
				.then(async res => {
					const { link } = res
					// DON'T TOUCH ONLY FOR DEV
					console.log(link, 'link1')

					this.bot.sendMessage(msg.chat.id, 'Нажмите на ссылку ниже', {
						reply_markup: {
							inline_keyboard: [
								[
									{
										text: 'Авторизоваться',
										url:
											this.configService.get('NODE_ENV') === 'production'
												? link
												: 'https://ya.ru'
									}
								]
							]
						}
					})
				})
				.catch(e =>
					this.bot.sendMessage(msg.chat.id, e.response.message ?? 'Неожиданная ошибка')
				)
		})
	}
}

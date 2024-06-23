import TelegramBot from 'node-telegram-bot-api'
import { Command } from './abstract.command'
import { getCommandRegexp } from '../utils'
import { WEBAPP_COMMAND } from '../bot.constants'
import { ConfigService } from '@nestjs/config'
import { AuthService } from '@/auth/auth.service'

export class WebappCommand extends Command {
	constructor(
		public readonly bot: TelegramBot,
		private readonly configService: ConfigService,
		private readonly authService: AuthService
	) {
		super(bot)
	}

	public handle(): void {
		this.bot.onText(getCommandRegexp(WEBAPP_COMMAND), async msg => {
			this.bot.sendMessage(msg.chat.id, 'Ожидайте...', {
				reply_markup: {
					remove_keyboard: true
				}
			})
			this.authService
				.login(String(msg.from.id), 'webapp')
				.then(async res => {
					const { link } = res
					// DON'T TOUCH ONLY FOR DEV
					console.log(link, 'link')

					this.bot.sendMessage(msg.chat.id, 'Нажмите на ссылку ниже', {
						reply_markup: {
							inline_keyboard: [
								[
									{
										text: 'Авторизоваться',
										web_app: {
											url:
												this.configService.get('NODE_ENV') === 'production'
													? link
													: 'https://ya.ru'
										}
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

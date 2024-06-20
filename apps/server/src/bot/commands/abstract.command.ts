import TelegramBot from 'node-telegram-bot-api'

export abstract class Command {
	constructor(public bot: TelegramBot) {}

	public abstract handle(): void
}

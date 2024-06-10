import { ConfigService } from '@nestjs/config'
import type { IBotOptions } from '@/bot/bot.interface'

export const getBotConfig = (config: ConfigService): IBotOptions => {
	return {
		token: config.get('BOT_TOKEN')
	}
}

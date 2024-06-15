import { NestFactory } from '@nestjs/core'
import { AppModule } from '@/app.module'
import { SettingsService } from '@/modules/settings/settings.service'
import { CardService } from '@/modules/card/card.service'
import { ESeederMode } from './enums'
;(async function () {
	const { MODE } = process.env as { MODE: ESeederMode | undefined }

	if (!MODE) {
		throw new Error('Укажите режим для сидера')
	}

	const app = await NestFactory.create(AppModule)
	const settingsService = app.get(SettingsService)
	const cardService = app.get(CardService)

	switch (MODE) {
		case ESeederMode.ALL:
			{
				await settingsService._seeding()
				await cardService._seeding()
			}
			break
		case ESeederMode.CARDS:
			{
				await cardService._seeding()
			}
			break
		case ESeederMode.SETTINGS:
			{
				await settingsService._seeding()
			}
			break
	}

	await app.close()

	console.log('Finish seed')
	process.exit()
})()

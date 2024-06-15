import { UserAchievementService } from './user-achievement.service'
import { BadRequestException, Injectable } from '@nestjs/common'
import { SettingsService } from '../settings/settings.service'
import { ESettingsName } from '@/common/enums'
import { CardService } from '../card/card.service'

@Injectable()
export class GameService {
	constructor(
		private readonly userAchievementService: UserAchievementService,
		private readonly settingsService: SettingsService,
		private readonly cardService: CardService
	) {}

	public async tap(userId: number) {
		const achievement = await this.userAchievementService.getByUserId(userId)

		if (!achievement) {
			throw new BadRequestException('Пользователь не найден. Обратитесь в поддержку')
		}

		const tryChance = await this.settingsService.getSettingsParamByName(
			ESettingsName.TRY_CHANCE
		)

		if (!tryChance) {
			throw new BadRequestException('Параметр не найден. 2')
		}

		const isUserHaveTries = achievement.tries > 0
		const isDateArrived = await this.isDateArrived(achievement.lastTap)
		const isFreeTry = Math.random() * 100 <= +tryChance.value

		if (!isUserHaveTries && !isDateArrived && !isFreeTry) {
			return `Прошло недостаточное количество времени. Подождите еще!`
		}

		const card = await this.cardService.drop()

		await this.userAchievementService.drop(userId, card, isUserHaveTries || isFreeTry)

		return card
	}

	public async getInventory(userId: number) {
		return this.userAchievementService.getByUserId(userId)
	}

	private async isDateArrived(date: Date) {
		if (date === null) {
			return true
		}

		const tapInterval = await this.settingsService.getSettingsParamByName(
			ESettingsName.TAP_INTERVAL
		)

		if (!tapInterval) {
			throw new BadRequestException('Параметр не найден. 1')
		}

		const dateForCheck = new Date(date)
		dateForCheck.setHours(dateForCheck.getHours() + +tapInterval)
		return new Date() > dateForCheck
	}
}

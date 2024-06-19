import { UserAchievementService } from './user-achievement.service'
import { BadRequestException, Injectable } from '@nestjs/common'
import { SettingsService } from '../settings/settings.service'
import { ESettingsName } from '@/common/enums'
import { CardService } from '../card/card.service'
import type { TGetInventory } from './types'

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

		console.log(isDateArrived, isUserHaveTries, isFreeTry)

		if (!isUserHaveTries && !isDateArrived && !isFreeTry) {
			return { message: `Прошло недостаточное количество времени. Подождите еще!` }
		}

		const card = await this.cardService.drop(achievement)

		await this.userAchievementService.drop(userId, card, isUserHaveTries || isFreeTry)

		let message = 'Вы получили карточку: '

		if (isUserHaveTries) {
			message = `Вы использовали попытку. У Вас осталось ${achievement.tries - 1} попыток`
		}
		if (isFreeTry) {
			message = 'Удача! Вам выпала бесплатная попытка!'
		}

		return { card, message }
	}

	public async getInventory(userId: number): Promise<TGetInventory> {
		const inventory = await this.userAchievementService.getByUserId(userId)

		const inventoryCardsMap = inventory.cards.reduce((acc, item) => {
			const color = item.card.color

			if (acc[color]) {
				acc[color].count += 1
			} else {
				acc[color] = { ...item, count: 1 }
			}

			return acc
		}, {})

		return {
			...inventory,
			cards: Object.keys(inventoryCardsMap).map(i => inventoryCardsMap[i])
		}
	}

	public async checkGettingCardStatus(userId: number) {
		const achievement = await this.userAchievementService.getByUserId(userId)

		const result = await this.isDateArrived(achievement.lastTap)

		return { result }
	}

	private async isDateArrived(date: string) {
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

		dateForCheck.setHours(dateForCheck.getHours() + +tapInterval.value)
		return new Date() > dateForCheck
	}
}

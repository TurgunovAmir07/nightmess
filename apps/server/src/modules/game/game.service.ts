import { UserAchievementService } from './user-achievement.service'
import { BadRequestException, Injectable } from '@nestjs/common'
import { SettingsService } from '../settings/settings.service'
import { ESettingsName } from '@/common/enums'
import { CardService } from '../card/card.service'
import type { TGetInventory } from './types'
import { CacheService } from '@/core/cache/cache.service'
import { UserService } from '../user/user.service'
import { FormatMap } from './utils'
import { RATING_CACHE } from './game.constants'

@Injectable()
export class GameService {
	constructor(
		private readonly userAchievementService: UserAchievementService,
		private readonly settingsService: SettingsService,
		private readonly cardService: CardService,
		private readonly cacheService: CacheService,
		private readonly userService: UserService
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

	public async getRating(userId: number | null) {
		// @ts-expect-error only map will be return, because res from redis can by only string
		let rating: Map<unknown, unknown> | null = await this.cacheService
			.get(RATING_CACHE)
			.then(res => (res ? new FormatMap(res).result : null))

		if (!rating) {
			rating = await this.setRating()
		}

		// eslint-disable-next-line
		const formatRating = [...rating].slice(0, 3).reduce((acc, [_, value]) => {
			acc.push(value)
			return acc
		}, [])

		const userFromRating = formatRating.find(i => i.id === userId)

		return !userFromRating && userId ? [...formatRating, rating.get(userId)] : formatRating
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

	private async setRating() {
		const users = await this.userService.getAll({
			relations: {
				achievement: true
			},
			order: {
				achievement: {
					points: 'DESC'
				}
			}
		})

		const ratingLiveTime = await this.settingsService.getSettingsParamByName(
			ESettingsName.RATING_LIVE_TIME
		)

		if (!ratingLiveTime) {
			throw new BadRequestException('Параметр не найден. 2')
		}

		const usersMap = users.reduce((acc, item, index) => {
			const { name, id } = item
			acc.set(item.id, { name, id, place: index + 1 })
			return acc
		}, new Map())

		await this.cacheService.set(
			RATING_CACHE,
			new FormatMap(usersMap).result as string,
			+ratingLiveTime.value * 60 * 60 * 1000
		)

		return usersMap
	}
}

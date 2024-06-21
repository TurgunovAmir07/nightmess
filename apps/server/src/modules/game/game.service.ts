import { UserAchievementService } from './user-achievement.service'
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common'
import { SettingsService } from '../settings/settings.service'
import { ECardRarity, ESettingsName } from '@/common/enums'
import { CardService } from '../card/card.service'
import type { TGetInventory, TGetInventoryItem } from './types'
import { CraftDto } from './dto'
import { UserCardService } from '../card/user-card.service'
import { chanceByLevelDto } from '@/common/dto'
import { UserService } from '../user/user.service'
import { CacheService } from '@/core/cache/cache.service'
import { FormatMap } from './utils'
import { RATING_CACHE, CRAFT_COUNT } from './game.constants'

@Injectable()
export class GameService {
	constructor(
		private readonly userAchievementService: UserAchievementService,
		private readonly settingsService: SettingsService,
		private readonly cardService: CardService,
		private readonly userCardService: UserCardService,
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
		// FIX
		// const isDateArrived = await this.isDateArrived(achievement.lastTap)
		const isDateArrived = true
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

		if (!inventory) {
			throw new BadRequestException('Инвентарь не найден. Обратитесь в поддержку')
		}

		const inventoryCardsMap = inventory.cards.reduce((acc, item) => {
			if (item.card) {
				const color = item.card.color

				if (acc[color]) {
					acc[color].count += 1
				} else {
					acc[color] = { ...item, count: 1 }
				}

				return acc
			}
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
		// await this.cacheService.set(
		// 	RATING_CACHE,
		// 	`{"dataType":"Map","value":[[1,{"name":"123","id":1,"place":1}],[3,{"name":"123","id":3,"place":2}],[2,{"name":"123","id":2,"place":3}],[4,{"name":null,"id":4,"place":4}]]}`,
		// 	1000000000000000000
		// )
		await this.cacheService.del(RATING_CACHE)

		// @ts-expect-error only map will be return, because res from redis can by only string
		const rating: Map<unknown, unknown> | null = await this.cacheService
			.get(RATING_CACHE)
			.then(res => (res ? new FormatMap(res).result : null))

		// if (!rating) {
		// 	rating = await this.setRating()
		// }

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

	public async craft(userId: number, { color, count }: CraftDto) {
		const totalCount = count * CRAFT_COUNT
		const { cards } = await this.getInventory(userId)

		const cardByInventory = cards.find(card => card.card.color === color) as TGetInventoryItem

		if (!cardByInventory) {
			throw new NotFoundException('Карточка с таким цветом не найдена в инвентаре')
		}
		const rarity = cardByInventory.card.rarity

		if (rarity === ECardRarity.THREE) throw new BadRequestException('Крафт невозможен')

		if (cardByInventory.count < totalCount) {
			throw new BadRequestException('Недостаточно карточек для крафта')
		}

		const levelChance = await this.settingsService.getSettingsParamByName(
			chanceByLevelDto[rarity]
		)

		if (!levelChance) {
			throw new BadRequestException('Параметр не найден. 3')
		}

		const successArray = []
		for (let i = 0; i < count; i++) {
			const isSuccess = Math.random() * 100 <= Number(levelChance.value)
			successArray.push(isSuccess)
		}
		const message = `Успешно скрафчено: ${successArray.filter(Boolean).length}`
		const newCards = await this.userCardService.craft(userId, successArray, rarity, color)

		return {
			cards: newCards.map(card => {
				delete card.achievement
				return card
			}),
			message
		}
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

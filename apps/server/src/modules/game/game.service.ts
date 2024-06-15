import { BadRequestException, Injectable } from '@nestjs/common'
import { UserAchievementRepository } from './user-achievement.repository'
import { SettingsService } from '../settings/settings.service'
import { ESettingsName } from '@/common/enums'

@Injectable()
export class GameService {
	constructor(
		private readonly userAchievementRepository: UserAchievementRepository,
		private readonly settingsService: SettingsService
	) {}

	public async tap(user: number) {
		const achievement = await this.userAchievementRepository.getAchievementByUserId(user)

		if (!achievement) {
			throw new BadRequestException('Пользователь не найден. Обратитесь в поддержку')
		}

		const isUserHaveTries = achievement.tries > 0

		const tapInterval = await this.settingsService.getSettingsParamByName(
			ESettingsName.TAP_INTERVAL
		)

		if (!tapInterval) {
			throw new BadRequestException('Параметр не найден. 1')
		}
	}
}

import { Injectable } from '@nestjs/common'
import { SettingsRepository } from './settings.repository'
import { ESettingsName } from '@/common/enums'

@Injectable()
export class SettingsService {
	constructor(private readonly settingsRepository: SettingsRepository) {}

	public async getSettingsParamByName(name: ESettingsName) {
		return this.settingsRepository.getSettingsParamByName(name)
	}
}

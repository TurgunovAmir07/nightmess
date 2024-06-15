import { Injectable } from '@nestjs/common'
import { SettingsRepository } from './settings.repository'
import { ESettingsName } from '@/common/enums'

@Injectable()
export class SettingsService {
	constructor(private readonly settingsRepository: SettingsRepository) {}

	public async getSettingsParamByName(name: ESettingsName) {
		return this.settingsRepository.getSettingsParamByName(name)
	}

	public async getAllSettings() {
		return this.settingsRepository.getAllSettings()
	}

	public async getSettingsParamsByNames(names: ESettingsName[]) {
		return this.settingsRepository.getSettingsParamsByNames(names)
	}
}

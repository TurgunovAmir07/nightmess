import { Injectable } from '@nestjs/common'
import { SettingsRepository } from './settings.repository'
import { ESettingsName } from '@/common/enums'
import { settingsGenerate } from '@/core/seeder/generate'
import { SettingsEntity } from './entities'

@Injectable()
export class SettingsService {
	constructor(private readonly settingsRepository: SettingsRepository) {}

	public async getSettingsParamByName(name: ESettingsName) {
		return this.settingsRepository.getParamByName(name)
	}

	public async getSettingsParamsByNamesMap(
		names: ESettingsName[]
	): Promise<[{ [key: string]: string }, SettingsEntity[]]> {
		const settings = await this.getSettingsParamsByNames(names)

		const settingsMap = settings.reduce((acc, item) => {
			acc[item.name] = item.value
			return acc
		}, {})

		return [settingsMap, settings]
	}

	public async getAll() {
		return this.settingsRepository.getAll()
	}

	public async getSettingsParamsByNames(names: ESettingsName[]) {
		return this.settingsRepository.getParamsByNames(names)
	}

	public async _seeding() {
		const oldSettings = await this.settingsRepository.getAll()
		const settings = Object.keys(ESettingsName).map((i: ESettingsName) => settingsGenerate(i))
		await this.settingsRepository
			.deleteMany(oldSettings)
			.then(() => this.settingsRepository.saveMany(settings))
	}
}

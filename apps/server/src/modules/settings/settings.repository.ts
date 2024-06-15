import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { SettingsEntity } from './entities'
import { In, Repository } from 'typeorm'
import { ESettingsName } from '@/common/enums'

@Injectable()
export class SettingsRepository {
	constructor(
		@InjectRepository(SettingsEntity)
		private readonly settingsRepository: Repository<SettingsEntity>
	) {}

	public async getSettingsParamByName(name: ESettingsName) {
		return this.settingsRepository.findOne({
			where: {
				name
			}
		})
	}
	public async getAllSettings() {
		return this.settingsRepository.find()
	}

	public async getSettingsParamsByNames(names: ESettingsName[]) {
		return this.settingsRepository.find({
			where: {
				name: In(names)
			}
		})
	}
}

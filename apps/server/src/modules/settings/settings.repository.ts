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

	public async getParamByName(name: ESettingsName) {
		return this.settingsRepository.findOne({
			where: {
				name
			}
		})
	}
	public async getAll() {
		return this.settingsRepository.find()
	}

	public async getParamsByNames(names: ESettingsName[]) {
		return this.settingsRepository.find({
			where: {
				name: In(names)
			}
		})
	}

	public async saveMany(settings: SettingsEntity[]) {
		return this.settingsRepository.save(settings)
	}

	public async deleteMany(entities: SettingsEntity[]) {
		return this.settingsRepository.remove(entities)
	}
}

import { Module } from '@nestjs/common'
import { SettingsService } from './settings.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { SettingsEntity } from './entities'
import { SettingsRepository } from './settings.repository'

@Module({
	imports: [TypeOrmModule.forFeature([SettingsEntity])],
	providers: [SettingsService, SettingsRepository],
	exports: [SettingsService]
})
export class SettingsModule {}

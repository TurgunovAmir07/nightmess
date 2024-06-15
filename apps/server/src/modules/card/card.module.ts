import { Module } from '@nestjs/common'
import { CardEntity } from './entities'
import { TypeOrmModule } from '@nestjs/typeorm'
import { CardService } from './card.service'
import { SettingsModule } from '../settings/settings.module'
import { CardRepository } from './card.repository'
import { DatabaseModule } from '@/core/database'

@Module({
	imports: [TypeOrmModule.forFeature([CardEntity]), SettingsModule, DatabaseModule],
	providers: [CardService, CardRepository],
	exports: [CardService]
})
export class CardModule {}

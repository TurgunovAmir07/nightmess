import { Module } from '@nestjs/common'
import { CardEntity } from './entities'
import { TypeOrmModule } from '@nestjs/typeorm'
import { CardService } from './card.service'
import { SettingsModule } from '../settings/settings.module'
import { CardRepository } from './card.repository'
import { DatabaseModule } from '@/core/database'
import { UserCardEntity } from './entities'
import { UserCardRepository } from './user-card.repository'
import { UserCardService } from './user-card.service'
import { UserModule } from '../user/user.module'

@Module({
	imports: [
		TypeOrmModule.forFeature([CardEntity, UserCardEntity]),
		SettingsModule,
		UserModule,
		DatabaseModule
	],
	providers: [CardService, CardRepository, UserCardService, UserCardRepository],
	exports: [CardService, UserCardService]
})
export class CardModule {}

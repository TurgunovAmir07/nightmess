import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserAchievementEntity } from './entities'
import { GameService } from './game.service'
import { SettingsModule } from '../settings/settings.module'
import { CardModule } from '../card/card.module'
import { GameController } from './game.controller'
import { UserModule } from '../user/user.module'

@Module({
	imports: [
		TypeOrmModule.forFeature([UserAchievementEntity]),
		SettingsModule,
		CardModule,
		UserModule
	],
	providers: [GameService],
	controllers: [GameController],
	exports: [GameService]
})
export class GameModule {}

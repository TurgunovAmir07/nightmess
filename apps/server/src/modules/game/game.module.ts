import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserAchievementEntity } from './entities'
import { GameService } from './game.service'
import { UserAchievementRepository } from './user-achievement.repository'
import { SettingsModule } from '../settings/settings.module'

@Module({
	imports: [TypeOrmModule.forFeature([UserAchievementEntity]), SettingsModule],
	providers: [GameService, UserAchievementRepository]
})
export class GameModule {}

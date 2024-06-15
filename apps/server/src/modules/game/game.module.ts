import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserAchievementEntity } from './entities'
import { GameService } from './game.service'

@Module({
	imports: [TypeOrmModule.forFeature([UserAchievementEntity])],
	providers: [GameService]
})
export class GameModule {}

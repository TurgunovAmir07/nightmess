import { Module } from '@nestjs/common'
import { UserController } from './user.controller'
import { UserRepository } from './user.repository'
import { UserService } from './user.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserEntity, UserAchievementEntity } from './entities'
import { UserAchievementService } from './user-achievement.service'
import { UserAchievementRepository } from './user-achievement.repository'

@Module({
	imports: [TypeOrmModule.forFeature([UserEntity, UserAchievementEntity])],
	controllers: [UserController],
	providers: [UserRepository, UserService, UserAchievementService, UserAchievementRepository],
	exports: [UserService, UserAchievementService]
})
export class UserModule {}

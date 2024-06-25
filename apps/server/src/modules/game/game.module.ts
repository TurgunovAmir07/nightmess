import { Module } from '@nestjs/common'
import { GameService } from './game.service'
import { SettingsModule } from '../settings/settings.module'
import { CardModule } from '../card/card.module'
import { GameController } from './game.controller'
import { UserModule } from '../user/user.module'
import { CacheService } from '@/core/cache/cache.service'
import { AuthModule } from '@/auth/auth.module'

@Module({
	imports: [SettingsModule, CardModule, UserModule, AuthModule],
	providers: [GameService, CacheService],
	controllers: [GameController],
	exports: [GameService]
})
export class GameModule {}

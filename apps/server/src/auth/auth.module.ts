import { UserModule } from '@/modules/user/user.module'
import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { TokenService } from './token.service'
import { AuthController } from './auth.controller'
import { JwtModule } from '@nestjs/jwt'
import { JWT_MODULE_OPTIONS } from './auth.constants'
import { ConfigService } from '@nestjs/config'
import { getJwtConfig } from '@/configs'
import { AccessJwtStrategy, RefreshJwtStrategy } from './strategies'
import { DatabaseModule } from '@/core/database'
import { CacheModule } from '@/core/cache/cache.module'

@Module({
	imports: [UserModule, JwtModule.register({}), DatabaseModule, CacheModule],
	controllers: [AuthController],
	providers: [
		AuthService,
		TokenService,
		AccessJwtStrategy,
		RefreshJwtStrategy,
		{
			provide: JWT_MODULE_OPTIONS,
			inject: [ConfigService],
			useFactory: getJwtConfig
		}
	],
	exports: [AuthService, TokenService]
})
export class AuthModule {}

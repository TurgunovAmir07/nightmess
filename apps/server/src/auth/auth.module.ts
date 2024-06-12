import { UserModule } from '@/modules/user/user.module'
import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { TokenService } from './token.service'
import { AuthController } from './auth.controller'
import { JwtModule } from '@nestjs/jwt'
import { JWT_MODULE_OPTIONS } from './auth.constants'
import { ConfigService } from '@nestjs/config'
import { getJwtConfig } from '@/configs'
import { TypeOrmModule } from '@nestjs/typeorm'
import { SessionEntity } from './entities'
import { SessionRepository } from './session.repository'
import { AccessJwtStrategy, RefreshJwtStrategy } from './strategies'

@Module({
	imports: [TypeOrmModule.forFeature([SessionEntity]), UserModule, JwtModule.register({})],
	controllers: [AuthController],
	providers: [
		AuthService,
		SessionRepository,
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

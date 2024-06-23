import { Inject, Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { JWT_MODULE_OPTIONS } from './auth.constants'
import { getJwtConfig } from '@/configs'
import { UserEntity } from '@/modules/user/entities'
import { JwtPayload } from './dto'
import { CacheService } from '@/core/cache/cache.service'
import { getRefreshTokenTtl } from './utils'

@Injectable()
export class TokenService {
	constructor(
		@Inject(JWT_MODULE_OPTIONS)
		private readonly jwtConfig: ReturnType<typeof getJwtConfig>,
		private readonly jwtService: JwtService,
		private readonly cacheService: CacheService
	) {}

	public generateTokens({ id, email, tg_id }: UserEntity) {
		const payload = { id, email, tg_id }
		const { access, refresh } = this.jwtConfig

		const accessToken = this.jwtService.sign(payload, access)
		const refreshToken = this.jwtService.sign(payload, refresh)

		return { accessToken, refreshToken }
	}

	public async saveToDb(token: string, user: UserEntity) {
		await this.cacheService.set(token, String(user.id), {
			ttl: getRefreshTokenTtl(this.jwtConfig)
		})
	}

	public validateAccessToken(accessToken: string): JwtPayload | null {
		try {
			const { secret } = this.jwtConfig.access

			return this.jwtService.verify(accessToken, {
				secret
			})
		} catch (e) {
			return null
		}
	}

	public async findSessionByToken(token: string) {
		return this.cacheService.get(token)
	}

	public async removeSessionByToken(token: string) {
		await this.cacheService.del(token)
	}
}

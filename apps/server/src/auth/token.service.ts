import { Inject, Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { JWT_MODULE_OPTIONS } from './auth.constants'
import { getJwtConfig } from '@/configs'
import { UserEntity } from '@/modules/user/entities'
import { SessionRepository } from './session.repository'

@Injectable()
export class TokenService {
	constructor(
		@Inject(JWT_MODULE_OPTIONS)
		private readonly jwtConfig: ReturnType<typeof getJwtConfig>,
		private readonly jwtService: JwtService,
		private readonly sessionRepository: SessionRepository
	) {}

	public generateTokens({ id, email }: UserEntity) {
		const payload = { id, email }
		const { access, refresh } = this.jwtConfig

		const accessToken = this.jwtService.sign(payload, access)
		const refreshToken = this.jwtService.sign(payload, refresh)

		return { accessToken, refreshToken }
	}

	public async safeToDb(token: string, user: number) {
		const oldSession = await this.sessionRepository.findByUser(user)

		if (oldSession) {
			return this.sessionRepository.update({
				...oldSession,
				token
			})
		}

		return this.sessionRepository.create({ user, token })
	}
}

import { Inject, Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { JWT_MODULE_OPTIONS } from './auth.constants'
import { getJwtConfig } from '@/configs'
import { UserEntity } from '@/modules/user/entities'
import { SessionRepository } from './session.repository'
import { JwtPayload } from './dto'

@Injectable()
export class TokenService {
	constructor(
		@Inject(JWT_MODULE_OPTIONS)
		private readonly jwtConfig: ReturnType<typeof getJwtConfig>,
		private readonly jwtService: JwtService,
		private readonly sessionRepository: SessionRepository
	) {}

	public generateTokens({ id, email, tg_id }: UserEntity) {
		const payload = { id, email, tg_id }
		const { access, refresh } = this.jwtConfig

		const accessToken = this.jwtService.sign(payload, access)
		const refreshToken = this.jwtService.sign(payload, refresh)

		return { accessToken, refreshToken }
	}

	public async saveToDb(token: string, user: UserEntity) {
		const oldSession = await this.sessionRepository.findByUser(user)

		if (oldSession) {
			return this.sessionRepository.update({
				...oldSession,
				token
			})
		}

		return this.sessionRepository.create({ user, token })
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

	public findSessionByToken(token: string) {
		return this.sessionRepository.findByToken(token)
	}

	public removeSessionByToken(token: string) {
		return this.sessionRepository.deleteByRefresh(token)
	}
}

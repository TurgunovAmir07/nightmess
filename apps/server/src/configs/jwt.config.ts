import { ENodeEnv } from '@/common/enums'
import { ConfigService } from '@nestjs/config'
import { JwtSignOptions } from '@nestjs/jwt'

export const getJwtConfig = (
	config: ConfigService
): { access: JwtSignOptions; refresh: JwtSignOptions } => {
	const isProduction = config.get('NODE_ENV') === ENodeEnv.production

	return {
		access: {
			expiresIn: isProduction ? '1m' : '30m',
			secret: config.get('ACCESS_JWT_SECRET')
		},
		refresh: {
			expiresIn: '30d',
			secret: config.get('REFRESH_JWT_SECRET')
		}
	}
}

import { getJwtConfig } from '@/configs'

export const getRefreshTokenTtl = (jwtConfig: ReturnType<typeof getJwtConfig>) =>
	+String(jwtConfig.refresh.expiresIn).slice(0, -1) * 24 * 60 * 60

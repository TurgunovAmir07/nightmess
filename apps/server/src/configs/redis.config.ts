import { ConfigService } from '@nestjs/config'

export const getRedisConfig = (configService: ConfigService) => ({
	url: `redis://${configService.get('REDIS_HOST')}:${configService.get('REDIS_PORT')}`,
	config: {
		username: configService.get('REDIS_USERNAME'),
		password: configService.get('REDIS_PASSWORD')
	}
})

import { ConfigService } from '@nestjs/config'
import type { RedisClientOptions } from 'redis'

/** 
	@deprecated will be remove after change telegram bot library
**/
export const getRedisTelegrafSessionConfig = (configService: ConfigService) => ({
	url: `redis://${configService.get('REDIS_HOST')}:${configService.get('REDIS_PORT')}`,
	config: {
		username: configService.get('REDIS_USERNAME'),
		password: configService.get('REDIS_PASSWORD')
	}
})

export const getRedisConfig = (config: ConfigService): RedisClientOptions => ({
	socket: {
		host: config.get('REDIS_HOST'),
		port: config.get('REDIS_PORT')
	},
	username: config.get('REDIS_USERNAME'),
	password: config.get('REDIS_PASSWORD')
})

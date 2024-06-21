import { Module } from '@nestjs/common'
import { getRedisConfig } from '@/configs'
import { redisStore } from 'cache-manager-redis-store'
import { CacheModule as Cache } from '@nestjs/cache-manager'
import { ConfigService } from '@nestjs/config'
import { CacheService } from './cache.service'

@Module({
	imports: [
		Cache.registerAsync({
			isGlobal: true,
			// @ts-expect-error by dock example
			useFactory: (config: ConfigService) => {
				return {
					store: async () => await redisStore(getRedisConfig(config)),
					ttl: 1000000
				}
			},
			inject: [ConfigService]
		})
	],
	providers: [CacheService],
	exports: [CacheService]
})
export class CacheModule {}

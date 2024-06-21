import { Inject, Injectable } from '@nestjs/common'
import { CACHE_MANAGER } from './cache.constants'
import { Cache } from 'cache-manager'

@Injectable()
export class CacheService {
	constructor(@Inject(CACHE_MANAGER) private readonly cache: Cache) {}

	public async get(key: string): Promise<null | string> {
		return this.cache.get(key)
	}

	public async set(key: string, value: string, ttl?: number) {
		const res = await this.cache.set(key, value, ttl)

		console.log(res)
	}

	public async del(key: string) {
		await this.cache.del(key)
	}
}

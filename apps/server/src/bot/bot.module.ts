import { DynamicModule, Global, Module, Provider } from '@nestjs/common'
import type { IBotModuleAsyncOptions } from './bot.interface'
import { BOT_MODULE_OPTIONS } from './bot.constants'
import { BotService } from './bot.service'

@Global()
@Module({})
export class BotModule {
	static forRootAsync(options: IBotModuleAsyncOptions): DynamicModule {
		const asyncOptions = this.createAsyncOptionsProvider(options)
		return {
			module: BotModule,
			imports: options.imports,
			providers: [BotService, asyncOptions]
		}
	}

	private static createAsyncOptionsProvider(options: IBotModuleAsyncOptions): Provider {
		return {
			provide: BOT_MODULE_OPTIONS,
			useFactory: async (...args: any[]) => {
				const config = await options.useFactory(...args)
				return config
			},
			inject: options.inject || []
		}
	}
}

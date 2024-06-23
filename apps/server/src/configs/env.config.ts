import { ENodeEnv } from '@/common/enums'
import { envValidateZod } from '@/common/utils'
import { getArrayEnum } from '@/common/utils'
import { ConfigModuleOptions } from '@nestjs/config'
import { join } from 'path'
import { z } from 'zod'

// !   пофиксить any
const nodeEnvArray = Object.freeze(getArrayEnum(ENodeEnv)) as any

const environmentVariables = z.object({
	SERVER_PORT: z.preprocess(Number, z.number()),
	CLIENT_URL: z.string(),
	VITE_SERVER_URL: z.string(),
	ACCESS_JWT_SECRET: z.string(),
	REFRESH_JWT_SECRET: z.string(),
	// * DataBase
	POSTGRES_HOST: z.string(),
	POSTGRES_PORT: z.preprocess(Number, z.number()),
	POSTGRES_USER: z.string(),
	POSTGRES_PASSWORD: z.string(),
	POSTGRES_DATABASE: z.string(),
	POSTGRES_SSL: z
		.enum(['true', 'false'])
		.default('false')
		.transform(value => value === 'true'),
	NODE_ENV: z.enum(nodeEnvArray).optional(),
	BOT_TOKEN: z.string(),
	REDIS_PORT: z.string(),
	REDIS_HOST: z.string(),
	REDIS_USERNAME: z.string(),
	REDIS_PASSWORD: z.string(),
	VITE_SERVER_STATIC_URL: z.string(),
	SERVER_WEBAPP_URL: z.string()
})

export const EnvConfigOptions: ConfigModuleOptions = {
	validate: envValidateZod(environmentVariables),
	isGlobal: true,
	envFilePath: join(__dirname, '../../../../', `/.env`)
}

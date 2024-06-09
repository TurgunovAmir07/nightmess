import { ENodeEnv } from '@/common/enums'
import { envValidateZod } from '@/core/utils'
import { getArrayEnum } from '@/core/utils'
import { ConfigModuleOptions } from '@nestjs/config'
import { z } from 'zod'

// !   пофиксить any
const nodeEnvArray = Object.freeze(getArrayEnum(ENodeEnv)) as any

const environmentVariables = z.object({
	SERVER_PORT: z.preprocess(Number, z.number()),
	CLIENT_URL: z.string().optional(),
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
	NODE_ENV: z.enum(nodeEnvArray).optional()
})

export const EnvConfigOptions: ConfigModuleOptions = {
	validate: envValidateZod(environmentVariables),
	isGlobal: true
}

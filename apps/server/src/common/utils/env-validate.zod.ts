import { ZodSchema } from 'zod'

export const envValidateZod = (schema: ZodSchema) => {
	return function (config: Record<string, unknown>) {
		try {
			const parsedValue = schema.parse(config)
			return parsedValue
		} catch (error) {
			throw new Error(error.toString())
		}
	}
}

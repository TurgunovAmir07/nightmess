import { PipeTransform, ArgumentMetadata, BadRequestException } from '@nestjs/common'
import { ZodSchema } from 'zod'

export class ZodValidationPipe implements PipeTransform {
	constructor(private schema: ZodSchema) {}

	public transform(value: unknown, metadata: ArgumentMetadata) {
		try {
			if (metadata.type === 'body') {
				const parsedValue = this.schema.parse(value)
				return parsedValue
			}
			return value
		} catch (error) {
			const messages = []
			const zodErrors = error.issues ?? []
			zodErrors.forEach(el => messages.push(el.message))
			throw new BadRequestException(messages)
		}
	}
}

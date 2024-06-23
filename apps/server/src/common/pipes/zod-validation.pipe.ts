import { PipeTransform, ArgumentMetadata, BadRequestException } from '@nestjs/common'
import { ZodSchema } from 'zod'
import { EZodPipeType } from '../enums'

export class ZodValidationPipe implements PipeTransform {
	constructor(
		private schema: ZodSchema,
		public type: EZodPipeType = EZodPipeType.body
	) {}

	public transform(value: unknown, metadata: ArgumentMetadata) {
		try {
			if (metadata.type === this.type) {
				const parsedValue = this.schema.parse(value)
				return parsedValue
			}
			return value
		} catch (error) {
			throw new BadRequestException('Validation failed')
		}
	}
}

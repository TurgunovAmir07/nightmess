export class FormatMap {
	public result: unknown

	constructor(value: string | Map<unknown, unknown>) {
		// @ts-expect-error any except string
		this.result = value === 'string' ? this.parse(value) : this.stringify(value)
	}

	private replacer(key: unknown, value: unknown) {
		if (value instanceof Map) {
			return {
				dataType: 'Map',
				value: Array.from(value.entries()) // or with spread: value: [...value]
			}
		} else {
			return value
		}
	}

	private reviver(key: unknown, value: { dataType: string; value: any }) {
		if (typeof value === 'object' && value !== null) {
			if (value.dataType === 'Map') {
				return new Map(value.value)
			}
		}
		return value
	}

	private stringify(map: Map<unknown, unknown>) {
		return JSON.stringify(map, this.replacer)
	}

	private parse(map: string) {
		return JSON.parse(map, this.reviver)
	}
}

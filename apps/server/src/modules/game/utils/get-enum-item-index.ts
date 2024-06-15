// eslint-disable-next-line @typescript-eslint/ban-types
export const getEnumItemIndex = <T extends Object>(map: T, key: keyof T): number =>
	Object.keys(map).findIndex(i => i === key)

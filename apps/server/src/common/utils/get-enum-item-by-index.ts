// eslint-disable-next-line @typescript-eslint/ban-types
export const getEnumItemByIndex = <T extends Object>(map: T, index: number): T[keyof T] =>
	map[Object.keys(map)[index]]

import { ECardRarity, ESettingsName } from '../enums'

export const chanceByLevelDto = {
	[ECardRarity.NULL]: ESettingsName.CRAFT_NULL_CHANCE,
	[ECardRarity.ONE]: ESettingsName.CRAFT_ONE_CHANCE,
	[ECardRarity.TWO]: ESettingsName.CRAFT_TWO_CHANCE
}

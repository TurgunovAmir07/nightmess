import { ESettingsName } from '@/common/enums'
import { SettingsEntity } from '@/modules/settings/entities'

export const settingsGenerate = (i: ESettingsName) => {
	const setting = new SettingsEntity()
	setting.name = i

	switch (i) {
		case ESettingsName.TAP_INTERVAL:
			{
				setting.description = 'Интервал бесплатного получения карточек'
				setting.value = '2'
			}
			break
		case ESettingsName.ZERO_LEVEL_CHANCE:
			{
				setting.description = 'Шанс на выпадение карточки 0 уровня'
				setting.value = '98.49'
			}
			break
		case ESettingsName.FIRST_LEVEL_CHANCE:
			{
				setting.description = 'Шанс на выпадение карточки 1 уровня'
				setting.value = '1'
			}
			break
		case ESettingsName.SECOND_LEVEL_CHANCE:
			{
				setting.description = 'Шанс на выпадение карточки 2 уровня'
				setting.value = '0.5'
			}
			break
		case ESettingsName.THIRD_LEVEL_CHANCE:
			{
				setting.description = 'Шанс на выпадение карточки 3 уровня'
				setting.value = '0.01'
			}
			break
		case ESettingsName.TRY_CHANCE:
			{
				setting.description = 'Шанс получения попытки'
				setting.value = '1'
			}
			break
		case ESettingsName.CRAFT_NULL_CHANCE:
			{
				setting.description = 'Шанс крафта с 0 на 1 уровень'
				setting.value = '80'
			}
			break
		case ESettingsName.CRAFT_ONE_CHANCE:
			{
				setting.description = 'Шанс крафта с 1 на 2 уровень'
				setting.value = '60'
			}
			break
		case ESettingsName.CRAFT_TWO_CHANCE:
			{
				setting.description = 'Шанс крафта с 2 на 3 уровень'
				setting.value = '40'
			}
			break
	}

	return setting
}

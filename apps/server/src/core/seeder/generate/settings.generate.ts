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
	}

	return setting
}

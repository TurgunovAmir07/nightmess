import { UserCardEntity } from '../card/entities'
import { UserAchievementEntity } from './entities'

type TGetInventoryItem = UserCardEntity & { count: number }

export type TGetInventory = UserAchievementEntity & { cards: TGetInventoryItem[] }

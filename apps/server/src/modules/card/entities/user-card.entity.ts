import { Entity, ManyToOne } from 'typeorm'
import { BaseEntity } from '@/core/database/entities'
import { CardEntity } from './card.entity'
import { UserAchievementEntity } from '@/modules/game/entities'

@Entity('UserCard')
export class UserCardEntity extends BaseEntity {
	@ManyToOne(() => CardEntity, card => card.userCards)
	public readonly card: CardEntity

	@ManyToOne(() => UserAchievementEntity, achievement => achievement.cards)
	public readonly achievement: UserAchievementEntity
}

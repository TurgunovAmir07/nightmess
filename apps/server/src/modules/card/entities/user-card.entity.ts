import { Entity, ManyToOne } from 'typeorm'
import { BaseEntity } from '@/core/database/entities'
import { CardEntity } from './card.entity'
import { UserAchievementEntity } from '@/modules/user/entities'

@Entity('UserCard')
export class UserCardEntity extends BaseEntity {
	@ManyToOne(() => CardEntity, card => card.userCards, { onDelete: 'SET NULL' })
	public readonly card: CardEntity

	@ManyToOne(() => UserAchievementEntity, achievement => achievement.cards, {
		onDelete: 'CASCADE'
	})
	public achievement: UserAchievementEntity
}

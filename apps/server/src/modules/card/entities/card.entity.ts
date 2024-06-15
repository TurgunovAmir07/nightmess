import { ECardRarity, ECardColor } from '@/common/enums'
import { BaseEntity } from '@/core/database/entities'
import { UserAchievementEntity } from '@/modules/game/entities'
import { Column, Entity, ManyToMany } from 'typeorm'

@Entity('Card')
export class CardEntity extends BaseEntity {
	@Column({
		type: 'enum',
		enum: ECardRarity
	})
	public rarity: ECardRarity

	@Column({
		type: 'enum',
		enum: ECardColor
	})
	public color: ECardColor

	@Column({
		unique: true
	})
	public name: string

	@Column()
	public description: string

	@Column()
	public image: string

	@Column()
	public chance: string

	@ManyToMany(() => UserAchievementEntity)
	public readonly achievements: UserAchievementEntity[]
}

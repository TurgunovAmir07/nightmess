import { ECardRarity, ECardColor } from '@/common/enums'
import { BaseEntity } from '@/core/database/entities'
import { Column, Entity, OneToMany } from 'typeorm'
import { Exclude } from 'class-transformer'
import { UserCardEntity } from './user-card.entity'

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
	public miniature: string

	@Exclude()
	@Column()
	public chance: string

	@OneToMany(() => UserCardEntity, userCard => userCard.card, { cascade: true })
	public readonly userCards: UserCardEntity[]
}

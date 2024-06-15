import { ECardRarity, ECardColor } from '@/common/enums'
import { Column, Entity } from 'typeorm'

@Entity('Card')
export class CardEntity {
	@Column({
		type: 'enum',
		enum: ECardRarity
	})
	public readonly rarity: ECardRarity

	@Column({
		type: 'enum',
		enum: ECardColor
	})
	public readonly color: ECardColor

	@Column({
		unique: true
	})
	public readonly name: string

	@Column()
	public readonly description: string

	@Column()
	public readonly image: string
}

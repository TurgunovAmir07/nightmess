import { BaseEntity } from '@/core/database/entities'
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToOne } from 'typeorm'
import { ECardRarity } from '@/common/enums'
import { UserEntity } from '@/modules/user/entities'
import { CardEntity } from '@/modules/card/entities'

@Entity('UserAchievement')
export class UserAchievementEntity extends BaseEntity {
	@Column({
		default: 0
	})
	public readonly points: number

	@Column({
		default: 0
	})
	public readonly taps: number

	@Column({
		type: 'enum',
		enum: ECardRarity,
		default: ECardRarity.NULL
	})
	public readonly stage: ECardRarity

	@Column({
		default: 0
	})
	public readonly tries: number

	@Column({
		type: 'date',
		nullable: true
	})
	public readonly lastTap: Date

	@OneToOne(() => UserEntity)
	@JoinColumn()
	public readonly user: UserEntity

	@ManyToMany(() => CardEntity)
	@JoinTable()
	public readonly cards: CardEntity[]
}

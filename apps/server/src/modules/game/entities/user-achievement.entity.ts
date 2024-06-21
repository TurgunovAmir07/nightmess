import { BaseEntity } from '@/core/database/entities'
import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm'
import { ECardRarity } from '@/common/enums'
import { UserEntity } from '@/modules/user/entities'
import { UserCardEntity } from '@/modules/card/entities'

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
	public stage: ECardRarity

	@Column({
		default: 0
	})
	public readonly tries: number

	@Column({
		nullable: true
	})
	public readonly lastTap: string | null

	@OneToOne(() => UserEntity)
	@JoinColumn()
	public readonly user: UserEntity

	@OneToMany(() => UserCardEntity, userCard => userCard.achievement, { cascade: true })
	public cards: UserCardEntity[]
}

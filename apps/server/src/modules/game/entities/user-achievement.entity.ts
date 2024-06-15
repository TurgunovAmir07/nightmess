import { BaseEntity } from '@/core/database/entities'
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm'
import { EUserStage } from '@/common/enums'
import { UserEntity } from '@/modules/user/entities'

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
		enum: EUserStage,
		default: EUserStage.NULL
	})
	public readonly stage: EUserStage

	@Column({
		default: 0
	})
	public readonly tries: number

	@Column({
		type: 'date'
	})
	public readonly lastTap: Date

	@OneToOne(() => UserEntity)
	@JoinColumn()
	public readonly user: number | null
}

import { BaseEntity } from '@/core/database/entities'
import { Column, Entity, OneToOne } from 'typeorm'
import { Exclude } from 'class-transformer'
import { UserAchievementEntity } from '@/modules/user/entities'

@Entity('User')
export class UserEntity extends BaseEntity {
	@Column({
		nullable: true
	})
	public readonly name: string | null

	@Column({
		nullable: true
	})
	public readonly surname: string | null

	@Column({
		nullable: true
	})
	public readonly patronymic: string | null

	@Column({
		unique: true,
		nullable: true
	})
	public readonly phone: string | null

	@Column({
		unique: true,
		nullable: true
	})
	public readonly email: string | null

	@Exclude()
	@Column({
		unique: true
	})
	public readonly tg_id: string

	@Exclude()
	@Column({
		unique: true,
		nullable: true
	})
	public readonly link: string | null

	@OneToOne(() => UserAchievementEntity, achievement => achievement.user)
	public readonly achievement: UserAchievementEntity
}

import { BaseEntity } from '@/core/database/entities'
import { UserEntity } from '@/modules/user/entities'
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm'

@Entity('Session')
export class SessionEntity extends BaseEntity {
	@Column({
		unique: true
	})
	public readonly token: string

	@OneToOne(() => UserEntity)
	@JoinColumn()
	public readonly user: UserEntity
}

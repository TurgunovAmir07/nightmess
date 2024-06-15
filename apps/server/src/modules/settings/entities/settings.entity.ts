import { BaseEntity } from '@/core/database/entities'
import { Column, Entity } from 'typeorm'
import { ESettingsName } from '@/common/enums'

@Entity('Settings')
export class SettingsEntity extends BaseEntity {
	@Column({
		nullable: true
	})
	public readonly description: string

	@Column({
		unique: true,
		enum: ESettingsName,
		type: 'enum'
	})
	public readonly name: ESettingsName

	@Column()
	public readonly value: string
}

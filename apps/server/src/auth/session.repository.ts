import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { DeepPartial, Repository } from 'typeorm'
import { SessionEntity } from './entities/session.entity'
import { UserEntity } from '@/modules/user/entities'

@Injectable()
export class SessionRepository {
	constructor(
		@InjectRepository(SessionEntity)
		private readonly sessionRepository: Repository<SessionEntity>
	) {}

	public async findByUser(user: UserEntity) {
		return this.sessionRepository.findOne({
			where: {
				user: {
					id: user.id
				}
			}
		})
	}

	public async update(session: DeepPartial<SessionEntity>) {
		return this.sessionRepository.save(session)
	}

	public async create(session: DeepPartial<SessionEntity>) {
		const createdSession = this.sessionRepository.create(session)
		return this.sessionRepository.save(createdSession)
	}

	public async findByToken(token: string) {
		return this.sessionRepository.findOne({
			where: {
				token
			}
		})
	}

	public deleteByRefresh(token: string) {
		return this.sessionRepository.delete({ token })
	}
}

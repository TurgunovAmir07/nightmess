import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { DeepPartial, Repository } from 'typeorm'
import { SessionEntity } from './entities/session.entity'

@Injectable()
export class SessionRepository {
	constructor(
		@InjectRepository(SessionEntity)
		private readonly sessionRepository: Repository<SessionEntity>
	) {}

	public async findByUser(user: number) {
		return this.sessionRepository.findOne({
			where: {
				user
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
}

import { Injectable } from '@nestjs/common'
import { InjectDataSource } from '@nestjs/typeorm'
import { DataSource, QueryRunner } from 'typeorm'

@Injectable()
export class DatabaseService {
	constructor(@InjectDataSource() private readonly _dataSource: DataSource) {}

	public dataSource() {
		return this._dataSource
	}

	public async transaction<T>(callback: (queryRunner: QueryRunner) => T) {
		const queryRunner = this._dataSource.createQueryRunner()
		await queryRunner.connect()
		await queryRunner.startTransaction()
		try {
			const resultCb = await callback(queryRunner)
			await queryRunner.commitTransaction()
			return resultCb
		} catch (e) {
			await queryRunner.rollbackTransaction()
			return null
		} finally {
			await queryRunner.release()
		}
	}
}

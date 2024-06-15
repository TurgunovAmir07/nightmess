import { getTypeormConfig } from '@/configs'
import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseService } from './database.service'

@Module({
	imports: [
		TypeOrmModule.forRootAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: getTypeormConfig
		})
	],
	providers: [DatabaseService],
	exports: [DatabaseService]
})
export class DatabaseModule {}

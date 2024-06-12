import { ConfigService } from '@nestjs/config'
import { TypeOrmModuleOptions } from '@nestjs/typeorm'

export const getTypeormConfig = (config: ConfigService): TypeOrmModuleOptions => {
	return {
		type: 'postgres',
		host: config.get('POSTGRES_HOST'),
		port: config.get('POSTGRES_PORT'),
		username: config.get('POSTGRES_USER'),
		password: config.get('POSTGRES_PASSWORD'),
		database: config.get('POSTGRES_DATABASE'),
		migrations: ['src/migrations/{.ts,.js}'],
		autoLoadEntities: true,
		synchronize: true
	}
}

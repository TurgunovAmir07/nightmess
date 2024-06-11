import { UserModule } from '@/modules/user/user.module'
import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'

@Module({
	imports: [UserModule],
	providers: [AuthService],
	exports: [AuthService]
})
export class AuthModule {}

import { Controller, Get } from '@nestjs/common'
import { GameService } from './game.service'
import { User } from '@/common/decorators'
import { AccessGuard } from '@/auth/guards/access.guard'
import { UseInterceptors, ClassSerializerInterceptor } from '@nestjs/common'

@Controller('game')
export class GameController {
	constructor(private readonly gameService: GameService) {}

	@AccessGuard()
	@Get('tap')
	public async drop(@User('id') userId: number) {
		return this.gameService.tap(userId)
	}

	@UseInterceptors(ClassSerializerInterceptor)
	@AccessGuard()
	@Get('inventory')
	public async getInventory(@User('id') userId: number) {
		return this.gameService.getInventory(userId)
	}
}

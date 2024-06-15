import { Controller, Get } from '@nestjs/common'
import { GameService } from './game.service'
import { User } from '@/common/decorators'
import { AccessGuard } from '@/auth/guards/access.guard'

@Controller('game')
export class GameController {
	constructor(private readonly gameService: GameService) {}

	@AccessGuard()
	@Get('tap')
	public async drop(@User('id') userId: number) {
		return this.gameService.tap(userId)
	}
}

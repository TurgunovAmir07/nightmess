import { Controller, Get } from '@nestjs/common'
import { GameService } from './game.service'
import { User } from '@/common/decorators'
import { AccessGuard } from '@/auth/guards/access.guard'
import { UseInterceptors, ClassSerializerInterceptor } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'

@ApiTags('Игра')
@Controller('game')
export class GameController {
	constructor(private readonly gameService: GameService) {}

	@ApiOperation({
		summary: 'Получение карточки'
	})
	@AccessGuard()
	@Get('tap')
	public async drop(@User('id') userId: number) {
		return this.gameService.tap(userId)
	}

	@ApiOperation({
		summary: 'Получение инвентаря'
	})
	@UseInterceptors(ClassSerializerInterceptor)
	@AccessGuard()
	@Get('inventory')
	public async getInventory(@User('id') userId: number) {
		return this.gameService.getInventory(userId)
	}
}

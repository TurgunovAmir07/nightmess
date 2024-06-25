import { Body, Controller, Get, HttpCode, HttpStatus, Post, UsePipes } from '@nestjs/common'
import { GameService } from './game.service'
import { User } from '@/common/decorators'
import { UseInterceptors, ClassSerializerInterceptor } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { CraftDto, craftSchema } from './dto'
import { ZodValidationPipe } from '@/common/pipes'
import { UserAuthNoRequiredGuard, AccessGuard } from '@/auth/guards'

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

	@ApiOperation({
		summary: 'Проверка статуса получения карточки'
	})
	@HttpCode(HttpStatus.OK)
	@AccessGuard()
	@Get('status')
	public async checkStatus(@User('id') userId: number) {
		return this.gameService.checkGettingCardStatus(userId)
	}

	@ApiOperation({
		summary: 'Получение таблицы рейтинга'
	})
	@HttpCode(HttpStatus.OK)
	@UserAuthNoRequiredGuard()
	@Get('rating')
	public async getRating(@User('id') userId: number) {
		return this.gameService.getRating(userId)
	}

	@ApiOperation({
		summary: 'Крафт карточки'
	})
	@HttpCode(HttpStatus.OK)
	@AccessGuard()
	@UsePipes(new ZodValidationPipe(craftSchema))
	@Post('craft')
	public async craft(@User('id') userId: number, @Body() craftDto: CraftDto) {
		return this.gameService.craft(userId, craftDto)
	}
}

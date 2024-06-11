import { Context, Scenes } from 'telegraf'
import { Update } from 'telegraf/typings/core/types/typegram'

export abstract class Scene {
	public abstract scene: Scenes.BaseScene<Context<Update>>

	constructor() {}

	public abstract handle(): void
}

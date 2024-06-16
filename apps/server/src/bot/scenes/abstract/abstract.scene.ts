import { WizardScene } from 'telegraf/typings/scenes'
import { IBotContext } from '../../context'
import { Composer } from 'telegraf'

export abstract class Scene {
	public abstract scene: WizardScene<IBotContext>
	public abstract composer: Composer<IBotContext>

	constructor() {}

	public abstract handle(): void
}

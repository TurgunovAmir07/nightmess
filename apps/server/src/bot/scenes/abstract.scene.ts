import { WizardScene } from 'telegraf/typings/scenes'
import { IBotContext } from '../context'

export abstract class Scene {
	public abstract scene: WizardScene<IBotContext>

	constructor() {}

	public abstract handle(): void
}

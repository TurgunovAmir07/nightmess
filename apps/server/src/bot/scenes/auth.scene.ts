import { Scenes } from 'telegraf'
import { Scene } from './abstract.scene'
import { WizardScene } from 'telegraf/typings/scenes'
import { IBotContext } from '../context'

export class AuthScene extends Scene {
	public scene: WizardScene<IBotContext>

	constructor() {
		super()
		this.scene = new Scenes.WizardScene('auth_scene', async ctx => {
			return ctx.wizard.next()
		})
		this.handle()
	}

	public handle() {}
}

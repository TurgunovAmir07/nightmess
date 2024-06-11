import { Scenes } from 'telegraf'
import { Scene } from './abstract.scene'
import { IBotContext } from '../context'

export class AuthScene extends Scene {
	public scene: Scenes.BaseScene<IBotContext>

	constructor() {
		super()
		this.scene = new Scenes.BaseScene('auth_scene')
		this.handle()
	}

	public handle() {
		this.scene.enter(ctx => {
			ctx.editMessageText('УРРАА')
		})
	}
}

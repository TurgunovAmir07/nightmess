import { Context } from 'telegraf'
import {
	SceneContextScene,
	SceneSession,
	SceneSessionData,
	WizardContextWizard
} from 'telegraf/typings/scenes'

export interface ISessionData extends SceneSession<IWizardSessionData> {
	userId: number
}
export interface IWizardSessionData extends SceneSessionData {
	cursor: number
}

export interface IBotContext extends Context {
	session: ISessionData
	scene: SceneContextScene<IBotContext, IWizardSessionData>
	wizard: WizardContextWizard<IBotContext>
}

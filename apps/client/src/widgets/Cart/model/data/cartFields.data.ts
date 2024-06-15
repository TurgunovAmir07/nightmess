interface TRules {
	required: string
	pattern: {
		value: RegExp
		message: string
	}
}

type TInputType = 'text' | 'email' | 'tel' | 'radio'

interface TCardField {
	id?: string
	value?: string
	description?: string
	isRadio?: boolean
	name?: string
	type: TInputType
	placeholder?: string
	label: string
	rules?: TRules
	img?: string
}

export const cartFieldsArr: TCardField[] = [
	{
		name: 'email',
		type: 'email',
		placeholder: 'support@nightmess.world',
		label: 'E-mail',
		rules: {
			required: 'E-mail обязательное поле!',
			pattern: {
				value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
				message: 'Пожалуйста введите почту в формате: mail@mail.com'
			}
		}
	},
	{
		name: 'tel',
		type: 'tel',
		placeholder: '+7 999 99 99',
		label: 'Телефон',
		rules: {
			required: 'Телефон обязательное поле!',
			pattern: {
				value: /^(\+375|80)(29|25|44|33)\d{7}|(\+7\d{10})|\+374\d{2}\d{3}\d{3}|\+994\d{2}\d{3}\d{4}|\+996\d{9}$/,
				message:
					'Пожалуйста введите номер телефона в формате: +7 999 99 99'
			}
		}
	},
	{
		name: 'city',
		type: 'text',
		placeholder: 'Москва',
		label: 'Город',
		rules: {
			required: 'Город обязательное поле!',
			pattern: {
				value: /^[a-zA-Zа-яА-Я]+$/,
				message: 'Неверный формат!'
			}
		}
	},
	{
		id: 'delivery',
		type: 'radio',
		value: 'express',
		label: 'СДЭК ЭКСПРЕСС',
		description: 'от 2 дней, 490 р.',
		isRadio: true
	},
	{
		id: 'delivery',
		type: 'radio',
		value: 'post_office',
		label: 'Почта России',
		description: 'от 10 дней, 500 р.',
		isRadio: true
	},
	{
		id: 'delivery',
		type: 'radio',
		value: 'cys',
		label: `Беларусь, Казахстан, Армения, Азербайджан, Кыргызстан`,
		description: 'от 5 дней, 1100 р.',
		isRadio: true
	},
	{
		name: 'location',
		type: 'text',
		placeholder: 'Выберите пункт получения',
		label: 'Пункт получения',
		rules: {
			required: 'Пункт получения обязательное поле!',
			pattern: {
				value: /^[a-zA-Zа-яА-Я]+$/,
				message: 'Неверный формат!'
			}
		}
	},
	{
		name: 'client',
		type: 'text',
		placeholder: 'Иванов Иван Иванович',
		label: 'Получатель (ФИО полностью)',
		rules: {
			required: 'Получатель обязательное поле!',
			pattern: {
				value: /^[А-ЯЁ][а-яё]+\s[А-ЯЁ][а-яё]+\s[А-ЯЁ][а-яё]+$/,
				message: 'ФИО должно быть в формате: Иванов Иван Иванович'
			}
		}
	},
	{
		name: 'telegram',
		type: 'text',
		placeholder: '@nightmess',
		label: 'Ник в Telegram',
		rules: {
			required: 'Пожалуйста введите свой ник в Telegram',
			pattern: {
				value: /^@[A-Za-z0-9_]{5,32}$/,
				message: 'Ник должен быть в формате: @nightmess'
			}
		}
	},
	{
		name: 'comment',
		type: 'text',
		placeholder: 'Комментарий к заказу',
		label: 'Комментарий'
	},
	{
		name: 'promotional_code',
		type: 'text',
		placeholder: 'Промокод',
		label: 'Промокод'
	},
	{
		id: 'payment',
		type: 'radio',
		value: 'card',
		label: 'Картой онлайн, СБП',
		isRadio: true
	},
	{
		id: 'payment',
		type: 'radio',
		value: 'shares',
		label: 'Долями - оплата частями',
		img: '/icon-shares.png',
		isRadio: true
	}
]

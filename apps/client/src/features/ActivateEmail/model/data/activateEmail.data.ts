export const activateEmailData = [
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
		name: 'password',
		type: 'password',
		placeholder: '',
		label: 'Пароль',
		rules: {
			required: 'Пароль обязательное поле!'
		}
	}
]

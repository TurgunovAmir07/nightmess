export const loginFieldsArr = [
  {
    label: 'Логин',
    name: 'login',
    type: 'text',
    rules: {
      required: 'Пожалуйста введите логин',
    },
    placeholder: 'Email или номер телефона',
  },
  {
    label: 'Пароль',
    name: 'password',
    rules: {
      required: 'Пожалуйста введите пароль',
    },
    type: 'password',
    placeholder: 'Пароль',
  },
]

export const registerFieldsArr = [
  {
    label: 'Никнейм',
    name: 'user_name',
    type: 'text',
    placeholder: 'Ваш никнейм',
    rules: {
      required: 'Пожалуйста введите никнейм',
    },
  },
  {
    label: 'Полное имя',
    name: 'full_name',
    type: 'text',
    placeholder: 'Иванов Иван Иванович',
    rules: {
      required: 'Пожалуйста введите полное имя',
      pattern: {
        value: /^[А-ЯЁ][а-яё]+\s[А-ЯЁ][а-яё]+\s[А-ЯЁ][а-яё]+$/,
        message: 'ФИО должно быть в формате: Иванов Иван Иванович',
      },
    },
  },
  {
    label: 'Телефон',
    name: 'phone',
    type: 'tel',
    placeholder: 'Телефон',
    rules: {
      required: 'Пожалуйста введите телефон',
      pattern: {
        value:
          /^(375|80)(29|25|44|33)\d{7}|(7\d{10})|374\d{2}\d{3}\d{3}|994\d{2}\d{3}\d{4}|996\d{9}$/,
        message: 'Пожалуйста введите номер телефона в формате: 7 999 99 99',
      },
    },
  },
  {
    label: 'Почта',
    name: 'email',
    type: 'email',
    placeholder: 'Email',
    rules: {
      required: 'Пожалуйста введите почту',
      pattern: {
        value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
        message: 'Пожалуйста введите почту в формате: mail@mail.com',
      },
    },
  },
  {
    label: 'Пароль',
    name: 'password',
    type: 'password',
    placeholder: 'Пароль',
    rules: {
      required: 'Пожалуйста введите пароль',
    },
  },
]

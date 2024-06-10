import { useState } from 'react'
import { Input, Popup } from '../../../../../../shared'
import cl from './OAuthTelegramPopup.module.scss'
import { Controller, useForm } from 'react-hook-form'
import { CartSubmitButton } from '../../../../@CartSubmitButton'

export const OAuthTelegramPopup = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean
  setIsOpen: (value: boolean) => void
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const [isCode, setIsCode] = useState(false)

  const handleForm = () => {
    setIsCode((prev) => !prev)
  }

  // eslint-disable-next-line
  const onSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <>
      <Popup title="TELEGRAM" isOpen={isOpen} setIsOpen={setIsOpen}>
        <form onSubmit={handleSubmit(onSubmit)} className={cl.root}>
          {isCode ? (
            <>
              <h2 className={cl.root_title}>Введите полученный код:</h2>
              <div className={cl.root__form}>
                <Controller
                  control={control}
                  rules={{ required: 'Пожалуйста введите код' }}
                  name="code"
                  render={({ field }) => (
                    <Input
                      field={field}
                      error={errors.code?.message}
                      label="Полученный код"
                      type="text"
                      placeholder="Код"
                    />
                  )}
                />
                <div className={cl.root__form_button}>
                  <CartSubmitButton title="привязать" isNoIcon />
                </div>
                <button
                  type="button"
                  onClick={handleForm}
                  className={cl.root__button}
                >
                  <span className={cl.root__button_text}>
                    Я ещё не получил код
                  </span>
                </button>
              </div>
            </>
          ) : (
            <>
              <h2 className={cl.root_title}>
                Для того чтобы авторизоваться через телеграм, Вам необходимо
                перейти в тг бота, где Вы сможете получить код для авторизации
              </h2>
              <button
                onClick={handleForm}
                type="button"
                className={cl.root__button}
              >
                <span className={cl.root__button_text}>я получил код</span>
              </button>
            </>
          )}
        </form>
      </Popup>
    </>
  )
}

import { UserModel } from '../model'
import { api } from '.'

export type UserRegisterData = Omit<UserModel, 'address_id' | 'login'>
export type UserLoginData = Pick<UserModel, 'login' | 'password'>
type ResponseAuthData = {
  status: string
  tokens: {
    access: string
    refresh: string
  }
}

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<ResponseAuthData, UserLoginData>({
      query: (userData) => ({
        url: 'login',
        method: 'POST',
        body: userData,
      }),
    }),
    register: builder.mutation<ResponseAuthData, UserRegisterData>({
      query: (userData) => ({
        url: 'register',
        method: 'POST',
        body: userData,
      }),
    }),
    refreshToken: builder.mutation<string, string>({
      query: (token) => ({
        url: 'refresh',
        method: 'POST',
        body: token,
      }),
    }),
    current: builder.query<UserLoginData, void>({
      query: () => ({
        url: 'user',
        method: 'GET',
      }),
    }),
  }),
})

export const {
  useLoginMutation,
  useRegisterMutation,
  useCurrentQuery,
  useRefreshTokenMutation,
} = authApi

export const {
  endpoints: { login, register, current, refreshToken },
} = authApi

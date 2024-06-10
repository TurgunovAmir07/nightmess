import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  createApi,
  fetchBaseQuery,
  // retry,
} from '@reduxjs/toolkit/query/react'
import { TypeRootState } from '../store'
// import AuthSlice from '../lib/slices/AuthSlice'

const baseQuery = fetchBaseQuery({
  baseUrl: `${import.meta.env.VITE_SERVER_URL}/api`,
  prepareHeaders(headers, { getState }) {
    const token =
      (getState() as TypeRootState).auth.user?.tokens?.access ||
      localStorage.getItem('token') ||
      null

    if ((token && token !== undefined) || null) {
      headers.set('Authorization', `Bearer ${token}`)
      headers.set('x-auth-token', `${token}`)
      headers.set('Content-Type', 'application/json')
    }
  },
})

// const baseQueryWithRetry = retry(baseQuery, { maxRetries: 1 })

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const result = await baseQuery(
    args
      ? args
      : {
          url: 'refresh',
          credentials: 'include',
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json',
          },
        },
    api,
    extraOptions
  )

  return result
}

export const api = createApi({
  reducerPath: 'splitApi',
  baseQuery: baseQueryWithReauth,
  refetchOnMountOrArgChange: true,
  endpoints: () => ({}),
})

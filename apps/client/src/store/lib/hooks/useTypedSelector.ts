import { type TypedUseSelectorHook, useSelector } from 'react-redux'
import type { TypeRootState } from '@/store'

export const useTypedSelector: TypedUseSelectorHook<TypeRootState> = useSelector

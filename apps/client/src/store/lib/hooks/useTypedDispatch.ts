import { useDispatch } from 'react-redux'
import type { TypeDispatch } from '@/store'

export const useTypedDispatch: () => TypeDispatch = useDispatch

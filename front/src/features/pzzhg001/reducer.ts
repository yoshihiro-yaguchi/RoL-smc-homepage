import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { initPzzjg000FormState, pzzjg001Form } from './types'

const initialState: pzzjg001Form = {
  pzzjg000FormState: initPzzjg000FormState,
}

export const pzzhg001States = createSlice({
  name: 'pzzhg001',
  initialState,
  reducers: {
    reset: () => initialState,
    addCount: (state, action: PayloadAction<{ addCount: number }>) => {
      state.pzzjg000FormState.counter = state.pzzjg000FormState.counter + action.payload.addCount
    },
  },
})

export const { actions } = pzzhg001States

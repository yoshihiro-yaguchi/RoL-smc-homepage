import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { initPzzjg000FormState, pzzjg000Form } from './types'

//  TODO: 関数名と型の変更
const initialState: pzzjg000Form = {
  pzzjg000FormState: initPzzjg000FormState,
}

// TODO: 関数名の変更
export const pzzhg000States = createSlice({
  name: 'pzzhg000',
  initialState,
  reducers: {
    reset: () => initialState,
    addCount: (state, action: PayloadAction<{ addCount: number }>) => {
      state.pzzjg000FormState.counter = state.pzzjg000FormState.counter + action.payload.addCount
    },
  },
})

export const { actions } = pzzhg000States

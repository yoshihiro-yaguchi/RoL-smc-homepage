import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { initPzzjg000FormState, pzzjg000Form } from './types'

const initialState: pzzjg000Form = {
  pzzjg000FormState: initPzzjg000FormState,
}

export const blogStates = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    reset: () => initialState,
    addCount: (state, action: PayloadAction<{ addCount: number }>) => {
      state.pzzjg000FormState.counter = state.pzzjg000FormState.counter + action.payload.addCount
    },
  },
})

export const { actions } = blogStates

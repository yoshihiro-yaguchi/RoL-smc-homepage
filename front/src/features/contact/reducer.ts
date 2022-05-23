import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { contactForm, contactState, initContactState } from './types'

const initialState: contactForm = {
  contactState: initContactState,
}

export const contactStates = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    reset: () => initialState,
    // 初期表示時
    init: (state) => {
      state.contactState.companyName = 'a'
      state.contactState.userName = 'b'
      state.contactState.mailAddress = 'c'
      state.contactState.telephoneNumber = 'd'
      state.contactState.contents = 'e'
    },
    // テキストインプット時のハンドラ
    onInputHandle: (state, action: PayloadAction<{ name: string; value: string }>) => {
      state.contactState[action.payload.name as keyof contactState] = action.payload.value
    },
  },
})

export const { actions } = contactStates

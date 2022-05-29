import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { contactForm, contactState, initContactScreenControlState, initContactState } from './types'

const initialState: contactForm = {
  contactState: initContactState,
  contactScreenControlState: initContactScreenControlState,
}

export const contactStates = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    // ステートリセット
    reset: () => initialState,

    // テキストインプット時のハンドラ
    onInputHandle: (state, action: PayloadAction<{ name: string; value: string }>) => {
      state.contactState[action.payload.name as keyof contactState] = action.payload.value
    },

    // 確認ダイアログ制御
    controlConfilmDialog: (state, action: PayloadAction<{ open: boolean }>) => {
      state.contactScreenControlState.confirmDialogOpen = action.payload.open
    },

    // 成功アラート制御
    controlSuccessAlert: (state, action: PayloadAction<{ open: boolean }>) => {
      state.contactScreenControlState.sendSuccessDialogOpen = action.payload.open
    },

    // 失敗アラート制御
    controlErrorAlert: (state, action: PayloadAction<{ open: boolean }>) => {
      state.contactScreenControlState.sendErrorDialogOpen = action.payload.open
    },

    // エラーダイアログ制御
    occuredError: (state, action: PayloadAction<{ errors: string[] }>) => {
      state.contactScreenControlState.errors = action.payload.errors
      state.contactScreenControlState.errorDialogOpen = true
    },

    // エラーダイアログ開閉処理
    controlErrorDialog: (state, action: PayloadAction<{ open: boolean }>) => {
      state.contactScreenControlState.errorDialogOpen = action.payload.open
    },
  },
})

export const { actions } = contactStates

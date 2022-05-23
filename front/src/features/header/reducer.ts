import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { initHeaderScreenState, headerForm, headerScreenState } from './types'

const initialState: headerForm = {
  headerScreenState: initHeaderScreenState,
}

export const headerStates = createSlice({
  name: 'header',
  initialState,
  reducers: {
    reset: () => initialState,

    // },
    onClickButtonhandle: (state, action: PayloadAction<{ name: string }>) => {
      // スタイル初期化
      state.headerScreenState.aboutStyle = { '&:hover': { borderBottom: '1px solid white' } }
      state.headerScreenState.businessStyle = { '&:hover': { borderBottom: '1px solid white' } }
      state.headerScreenState.blogStyle = { '&:hover': { borderBottom: '1px solid white' } }
      state.headerScreenState.contactStyle = { '&:hover': { borderBottom: '1px solid white' } }

      const style = { borderBottom: '1px solid white' }

      state.headerScreenState[`${action.payload.name}Style` as keyof headerScreenState] = style
    },
  },
})

export const { actions } = headerStates

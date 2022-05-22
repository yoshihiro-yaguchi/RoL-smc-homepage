import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ROUTER_ENUM } from 'common/rolCommons'
import { initHeaderScreenState, headerForm } from './types'

const initialState: headerForm = {
  headerScreenState: initHeaderScreenState,
}

export const headerStates = createSlice({
  name: 'header',
  initialState,
  reducers: {
    reset: () => initialState,
    // addCount: (state, action: PayloadAction<{ addCount: number }>) => {

    // },
    onClickButtonhandle: (state, action: PayloadAction<{ name: string }>) => {
      // スタイル初期化
      state.headerScreenState.aboutStyle = {}
      state.headerScreenState.businessStyle = {}
      state.headerScreenState.blogStyle = {}
      state.headerScreenState.contactStyle = {}

      const name = action.payload.name
      const style = { borderBottom: '1px solid white' }

      if (ROUTER_ENUM.about === name) {
        state.headerScreenState.aboutStyle = style
      }
      if (ROUTER_ENUM.business === name) {
        state.headerScreenState.businessStyle = style
      }
      if (ROUTER_ENUM.blog === name) {
        state.headerScreenState.blogStyle = style
      }
      if (ROUTER_ENUM.contact === name) {
        state.headerScreenState.contactStyle = style
      }
    },
  },
})

export const { actions } = headerStates

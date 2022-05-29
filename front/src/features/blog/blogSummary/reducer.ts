import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { blogSummaryForm, getInitReturn } from './types'

const initialState: blogSummaryForm = {
  blogSummaryStateList: [],
}

export const blogSummaryStates = createSlice({
  name: 'blogSummary',
  initialState,
  reducers: {
    reset: () => initialState,
    doInit: (state, action: PayloadAction<{ datas: getInitReturn }>) => {
      const target = action.payload.datas

      // データ定義
      state.blogSummaryStateList = target.result
    },
  },
})

export const { actions } = blogSummaryStates

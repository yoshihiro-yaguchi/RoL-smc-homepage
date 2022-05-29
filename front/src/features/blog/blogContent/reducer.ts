import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { blogContentForm, getInitReturn, initBlogContentState } from './types'

const initialState: blogContentForm = {
  blogContentState: initBlogContentState,
}

export const blogContentStates = createSlice({
  name: 'blogContent',
  initialState,
  reducers: {
    reset: () => initialState,
    doInit: (state, action: PayloadAction<{ data: getInitReturn }>) => {
      const target = action.payload.data.result

      // データ定義
      state.blogContentState.content = target.content || ''
      state.blogContentState.objectId = target.objectId || ''
      state.blogContentState.registeredDate = target.registeredDate || ''
      state.blogContentState.title = target.title || ''
    },
  },
})

export const { actions } = blogContentStates

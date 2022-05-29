import { NavigateFunction } from 'react-router-dom'
import { AppThunk } from 'redux/store'
import { blogSummaryApi } from './api'
import { actions as blogActions } from './reducer'

export const blogOperations = {
  init: (): AppThunk => async (dispatch) => {
    const getResponse = await blogSummaryApi.doInit()
    dispatch(blogActions.doInit({ datas: getResponse.data }))
  },
  doPaging:
    (blogId: string, navigate: NavigateFunction): AppThunk =>
    async () => {
      const params = new URLSearchParams()
      params.append('blogId', blogId)
      navigate(`/blogContent?${params.toString()}`)
    },
}

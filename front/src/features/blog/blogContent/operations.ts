import { AppThunk } from 'redux/store'
import { blogContentApi } from './api'
import { actions as blogContentActions } from './reducer'

export const blogContentOperations = {
  init:
    (params: URLSearchParams): AppThunk =>
    async (dispatch) => {
      const serachParams = new URLSearchParams()
      serachParams.append('blogId', params.get('blogId')?.toString() || '')
      const getResponse = await blogContentApi.doInit(serachParams)
      dispatch(blogContentActions.doInit({ data: getResponse.data }))
    },
}

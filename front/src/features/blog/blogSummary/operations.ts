import { AppThunk } from 'redux/store'
import { blogSummaryApi } from './api'
import { actions as blogActions } from './reducer'

export const blogOperations = {
  init: (): AppThunk => async (dispatch) => {
    const params = new URLSearchParams()
    params.append('method', 'get')
    const getResponse = await blogSummaryApi.doInit()
    dispatch(blogActions.doInit({ datas: getResponse.data }))
  },
}

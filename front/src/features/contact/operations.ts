import { AppThunk } from 'redux/store'
import { pzzhg000Api } from './api'

export const pzzjg000Operations = {
  init: (): AppThunk => async () => {
    const params = new URLSearchParams()
    params.append('method', 'get')
    const getResponse = await pzzhg000Api.doInit(params)
    console.log(getResponse.status)
    console.log(getResponse.data)

    const postResponse = await pzzhg000Api.doPost(params)
    console.log(postResponse.status)
    console.log(postResponse.data)
  },

  countUp:
    (count: number): AppThunk =>
    async (dispatch, getState) => {
      console.log(getState().header)
    },
}

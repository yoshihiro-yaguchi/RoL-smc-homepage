import { AppThunk } from 'redux/store'
import { actions as pzzhg000Actions } from './reducer'

export const pzzjg000Operations = {
  countUp:
    (count: number): AppThunk =>
    async (dispatch, getState) => {
      console.log(getState().pzzhg000Actions.pzzjg000FormState.counter)
      dispatch(pzzhg000Actions.addCount({ addCount: count }))
    },
}

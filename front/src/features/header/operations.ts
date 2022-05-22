import { ROUTER_ENUM } from 'common/rolCommons'
import { NavigateFunction } from 'react-router-dom'
import { AppThunk } from 'redux/store'
import { actions as headerActions } from './reducer'

export const headerOperations = {
  onClickButtonOperation:
    (name: string, navigate: NavigateFunction): AppThunk =>
    async (dispatch) => {
      dispatch(headerActions.onClickButtonhandle({ name: name }))

      if (ROUTER_ENUM.about === name) {
        navigate(`/${ROUTER_ENUM.about}`)
      } else if (ROUTER_ENUM.business === name) {
        navigate(`/${ROUTER_ENUM.business}`)
      } else if (ROUTER_ENUM.blog === name) {
        navigate(`/${ROUTER_ENUM.blog}`)
      } else if (ROUTER_ENUM.contact === name) {
        navigate(`/${ROUTER_ENUM.contact}`)
      }
    },
}

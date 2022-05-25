import { AppThunk } from 'redux/store'
import { pzzhg000Api } from './api'
import { actions as contactActions } from './reducer'

export const contactOperations = {
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

  /**
   * 送信ボタン押下時
   */
  onClickSend: (): AppThunk => async (dispatch, getState) => {
    const { userName, mailAddress, contents } = getState().contact.contactState
    // validate
    let validateResult: string[] = []
    // お名前
    if (userName === '' || userName === null) {
      validateResult.push('お名前は入力必須項目です。')
    }
    // メールアドレス
    if (mailAddress === '' || mailAddress === null) {
      validateResult.push('メールアドレスは入力必須項目です。')
    }
    // お問い合わせ内容
    if (contents === '' || contents === null) {
      validateResult.push('お問い合わせ内容は入力必須項目です。')
    }

    // エラーが有る場合は処理中断
    if (validateResult.length > 0) {
      dispatch(contactActions.occuredError({ errors: validateResult }))
      return
    }

    dispatch(contactActions.controlConfilmDialog({ open: true }))
  },

  /**
   * 確認ダイアログ送信ボタン押下時
   */
  onClickConfirmDialogOk: (): AppThunk => async (dispatch) => {
    // api呼び出し処理
    dispatch(contactActions.controlConfilmDialog({ open: false }))
  },
}

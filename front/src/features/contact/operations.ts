import { AppThunk } from 'redux/store'
import { contactApi } from './api'
import { actions as contactActions } from './reducer'

export const contactOperations = {
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
  onClickConfirmDialogOk: (): AppThunk => async (dispatch, getState) => {
    // api呼び出し処理
    let target = getState().contact.contactState

    let params = new URLSearchParams()
    params.append('companyName', target.companyName)
    params.append('userName', target.userName)
    params.append('mailAddress', target.mailAddress)
    params.append('telephoneNumber', target.telephoneNumber)
    params.append('contents', target.contents)

    const result = await contactApi.doSend(params)
    console.log(result)

    dispatch(contactActions.controlConfilmDialog({ open: false }))

    if (result.data) {
      dispatch(contactActions.controlSuccessAlert({ open: true }))
    } else {
      dispatch(contactActions.controlErrorAlert({ open: true }))
    }
  },
}

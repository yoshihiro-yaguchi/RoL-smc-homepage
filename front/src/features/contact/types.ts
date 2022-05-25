/**
 * メイン画面フォーム
 */
export interface contactForm {
  contactState: contactState
  contactScreenControlState: contactScreenControlState
}

/**
 * contact画面コントロール
 */
export interface contactScreenControlState {
  errorDialogOpen: boolean
  errors: string[]
  confirmDialogOpen: boolean
  sendSuccessDialogOpen: boolean
  sendErrorDialogOpen: boolean
}

/**
 * contact画面コントロール初期化
 */
export const initContactScreenControlState: contactScreenControlState = {
  errorDialogOpen: false,
  errors: [],
  confirmDialogOpen: false,
  sendSuccessDialogOpen: false,
  sendErrorDialogOpen: false,
}

/**
 * contact画面ステート
 */
export interface contactState {
  companyName: string
  userName: string
  mailAddress: string
  telephoneNumber: string
  contents: string
}

/**
 * contact画面初期化
 */
export const initContactState: contactState = {
  companyName: '',
  userName: '',
  mailAddress: '',
  telephoneNumber: '',
  contents: '',
}

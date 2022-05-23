/**
 * メイン画面フォーム
 */
export interface contactForm {
  contactState: contactState
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
  companyName: 'a',
  userName: 'b',
  mailAddress: 'c',
  telephoneNumber: 'd',
  contents: 'e',
}

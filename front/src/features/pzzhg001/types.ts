/**
 * メイン画面フォーム
 */
export interface pzzjg001Form {
  pzzjg000FormState: pzzjg001FormState
}

/**
 * メイン画面ステート
 */
interface pzzjg001FormState {
  hoge: string
  counter: number
}
/**
 * メイン画面初期化
 */
export const initPzzjg000FormState: pzzjg001FormState = {
  hoge: '',
  counter: 0,
}

/**
 * メイン画面フォーム
 */
export interface pzzjg000Form {
  pzzjg000FormState: pzzjg000FormState
}

/**
 * メイン画面ステート
 */
interface pzzjg000FormState {
  counter: number
}
/**
 * メイン画面初期化
 */
export const initPzzjg000FormState: pzzjg000FormState = {
  counter: 0,
}

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
  hoge: string
  counter: number
}
/**
 * メイン画面初期化
 */
export const initPzzjg000FormState: pzzjg000FormState = {
  hoge: '',
  counter: 0,
}

export interface blogSummaryState {
  // タイトル
  // 投稿日
}

/**
 * 初期処理API戻り型
 */
export interface getInitReturn {
  // 検索結果
  result: blogSummaryState[]
}

/**
 * ブログ一覧画面フォーム
 */
export interface blogSummaryForm {
  blogSummaryStateList: blogSummaryState[]
}

/**
 * ブログ一覧画面ステート
 */
export interface blogSummaryState {
  // オブジェクトID
  objectId: string
  // タイトル
  title: string
  // 投稿日
  registeredDate: string
}

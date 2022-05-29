/**
 * 初期処理戻り型
 */
export interface getInitReturn {
  result: blogContentState
}

/**
 * ブログコンテンツフォーム
 */
export interface blogContentForm {
  blogContentState: blogContentState
}

/**
 * ブログコンテンツステート
 */
export interface blogContentState {
  objectId: string
  registeredDate: string
  title: string
  content: string
}

/**
 * ブログコンテンツステート 初期化
 */
export const initBlogContentState: blogContentState = {
  objectId: '',
  registeredDate: '',
  title: '',
  content: '',
}

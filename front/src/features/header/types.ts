import { CSSProperties } from 'react'

/**
 * ヘッダーフォーム
 */
export interface headerForm {
  headerScreenState: headerScreenState
}

/**
 * ヘッダースクリーンステート
 */
export interface headerScreenState {
  aboutStyle: CSSProperties
  businessStyle: CSSProperties
  blogStyle: CSSProperties
  contactStyle: CSSProperties
}

export const initHeaderScreenState: headerScreenState = {
  aboutStyle: { borderBottom: '1px solid white' },
  businessStyle: {},
  blogStyle: {},
  contactStyle: {},
}

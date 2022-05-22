import { SxProps, Theme } from '@mui/material'

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
  aboutStyle: SxProps<Theme>
  businessStyle: SxProps<Theme>
  blogStyle: SxProps<Theme>
  contactStyle: SxProps<Theme>
}

export const initHeaderScreenState: headerScreenState = {
  aboutStyle: { '&:hover': { borderBottom: '1px solid white' } },
  businessStyle: { '&:hover': { borderBottom: '1px solid white' } },
  blogStyle: { '&:hover': { borderBottom: '1px solid white' } },
  contactStyle: { '&:hover': { borderBottom: '1px solid white' } },
}

import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { RootState } from 'redux/store'
import { pzzjg000Operations } from './operations'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

export const BlogContent = () => {
  const pxzzjh000Actions = useAppSelector((state: RootState) => state.header)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(pzzjg000Operations.init())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const body = `

  # #見出し
  ---
  # タイトル
  ## タイトル
  ### タイトル
  #### タイトル

  # #リスト
  ---
  - Hello!
  - Hola!
    - Bonjour!
    * Hi!

  1. a
  2. b
  3. c

  aa  aa

  | a | a | a |
  | --- | --- | --- |
  | aaa | aaa | aaa |
  `

  return (
    <>
      <ReactMarkdown>{body}</ReactMarkdown>
    </>
  )
}

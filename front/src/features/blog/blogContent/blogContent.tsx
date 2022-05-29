import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { RootState } from 'redux/store'
import { blogContentOperations } from './operations'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { useLocation } from 'react-router-dom'
import { ScreenBox } from 'common/commonComponents'
import { Typography } from '@mui/material'

export const BlogContent = () => {
  const state = useAppSelector((state: RootState) => state.blogContent)
  const dispatch = useAppDispatch()
  const searchParams = useLocation().search
  const params = new URLSearchParams(searchParams)
  useEffect(() => {
    dispatch(blogContentOperations.init(params))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <ScreenBox>
        <Typography>{state.blogContentState.title}</Typography>
        <ReactMarkdown>{state.blogContentState.content}</ReactMarkdown>
      </ScreenBox>
    </>
  )
}

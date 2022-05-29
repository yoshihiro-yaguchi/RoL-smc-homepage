import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { RootState } from 'redux/store'
import { blogOperations } from './operations'
import { ScreenBox, ViewDetailInfoBox } from 'common/commonComponents'
import { Box, Typography } from '@mui/material'
import { Cell } from './components/Cell'
import { useNavigate } from 'react-router-dom'

export const BlogSummary = () => {
  const states = useAppSelector((state: RootState) => state.blogSummary)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    dispatch(blogOperations.init())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const paging = (blogId: string) => {
    dispatch(blogOperations.doPaging(blogId, navigate))
  }

  return (
    <>
      <ScreenBox>
        <Box>
          <Typography fontSize={25}>
            <strong>Blog.</strong>
          </Typography>
        </Box>

        <ViewDetailInfoBox>
          {states.blogSummaryStateList.map((data, key) => {
            return (
              <React.Fragment key={key}>
                <Cell
                  key={data.objectId}
                  title={data.title}
                  date={data.registeredDate}
                  blogId={data.objectId}
                  onDoubleClick={() => console.log(paging(data.objectId))}
                />
              </React.Fragment>
            )
          })}
        </ViewDetailInfoBox>
      </ScreenBox>
    </>
  )
}

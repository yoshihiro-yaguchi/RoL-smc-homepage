import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { RootState } from 'redux/store'
import { blogOperations } from './operations'
import { ScreenBox, ViewDetailInfoBox } from 'common/commonComponents'
import { Box, Typography } from '@mui/material'
import { Cell } from './components/Cell'

export const BlogSummary = () => {
  const states = useAppSelector((state: RootState) => state.blogSummary)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(blogOperations.init())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <ScreenBox>
        <Box>
          <Typography fontSize={25}>
            <strong>Blog.</strong>
          </Typography>
        </Box>

        <ViewDetailInfoBox>
          {states.blogSummaryStateList.map((data) => {
            return (
              <>
                <Cell
                  key={data.objectId}
                  title={data.title}
                  date={data.registeredDate}
                  blogId={data.objectId}
                  onDoubleClick={() => console.log(data.objectId)}
                />
              </>
            )
          })}
        </ViewDetailInfoBox>
      </ScreenBox>
    </>
  )
}

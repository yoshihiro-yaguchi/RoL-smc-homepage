import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { RootState } from 'redux/store'
import { blogOperations } from './operations'
import { ScreenBox, ViewDetailInfoBox } from 'common/commonComponents'
import { Box, Typography } from '@mui/material'
import { Cell } from './components/Cell'
import { useNavigate } from 'react-router-dom'
import BlogImage from 'pic/blog/abstract-g9de7c00c2_1920.jpg'
import { common } from '@mui/material/colors'

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
      <Box
        sx={{
          width: '100%',
          marginTop: '100px',
        }}
      >
        <img
          src={BlogImage}
          alt="BusinessImage"
          style={{ width: '100%', height: '500px', objectFit: 'none', borderRadius: '10px' }}
        />
        <Typography
          color={common['white']}
          fontSize={100}
          sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -70%)' }}
        >
          <strong>Blog.</strong>
        </Typography>
      </Box>
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

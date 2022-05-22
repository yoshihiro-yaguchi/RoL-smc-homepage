import styled from '@emotion/styled'
import { Box, BoxProps, Typography } from '@mui/material'
import { blueGrey, grey, common } from '@mui/material/colors'

type ViewInfoProps = {
  title?: string
  children: React.ReactNode
  margin?: string
  padding?: string
  borderRadius?: string
}

/**
 * RoLホームページのサイズに合わせたボックス。
 *
 * @param props
 * @returns
 */
export const ScreenBox = (props: BoxProps) => {
  const ScreenBox = styled(Box)({
    width: '1080px',
    margin: '100px auto',
  })

  const { children } = props

  return (
    <>
      <ScreenBox {...props}>{children}</ScreenBox>
    </>
  )
}

export const ViewDetailInfoBox = (props: ViewInfoProps & BoxProps) => {
  const { children } = props
  return (
    <>
      <Box sx={{ borderRadius: '10px', backgroundColor: blueGrey[100], padding: '5px 5px', margin: '5px 20px' }}>
        {children}
      </Box>
    </>
  )
}

/**
 * 詳細情報を表示する部品
 *
 * @param props
 * @returns
 */
export const ViewDetailInfo = (props: ViewInfoProps & BoxProps) => {
  const { title, children, margin, padding, borderRadius } = props
  return (
    <>
      <Box
        sx={{
          borderRadius: borderRadius,
          backgroundColor: common['white'],
          margin: margin,
          padding: padding,
          height: '100%',
          overflow: 'auto',
        }}
      >
        {/* タイトル */}
        <Box
          sx={{ float: 'left', borderRadius: '5px', backgroundColor: blueGrey[50], width: '120px', height: '100% ' }}
        >
          <Typography sx={{ textAlign: 'center' }}>
            <strong>{title}</strong>
          </Typography>
        </Box>
        {/* 情報 */}
        <Box sx={{ marginLeft: '130px', height: '100% ' }}>{children}</Box>
      </Box>
    </>
  )
}

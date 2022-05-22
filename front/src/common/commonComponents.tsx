import styled from '@emotion/styled'
import { Box, BoxProps, Typography } from '@mui/material'
import { blueGrey, common } from '@mui/material/colors'

type ViewInfoProps = {
  title?: string
  children: React.ReactNode
  margin?: string
  padding?: string
  borderRadius?: string
  titlewidth?: string
  infoMarginLeft?: string
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
      <Box
        sx={{
          borderRadius: '10px',
          backgroundColor: blueGrey[100],
          padding: '5px 5px',
          margin: '5px 20px',
          height: '100%',
          width: '100%',
        }}
      >
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
  const { title, children, margin, padding, borderRadius, titlewidth, infoMarginLeft } = props

  console.log(titlewidth)
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
          sx={{
            float: 'left',
            borderRadius: '5px',
            backgroundColor: blueGrey[50],
            width: titlewidth,
            height: '100% ',
          }}
        >
          <Typography sx={{ textAlign: 'center' }}>
            <strong>{title}</strong>
          </Typography>
        </Box>
        {/* 情報 */}
        <Box sx={{ marginLeft: infoMarginLeft, height: '100% ' }}>{children}</Box>
      </Box>
    </>
  )
}

ViewDetailInfo.defaultProps = {
  borderRadius: '10px',
  margin: '5px',
  padding: '5px',
  titlewidth: '120px',
  infoMarginLeft: '130px',
}

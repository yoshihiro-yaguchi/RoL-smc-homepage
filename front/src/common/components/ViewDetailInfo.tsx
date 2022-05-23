import { Box, BoxProps, Typography } from '@mui/material'
import { blueGrey, common, red } from '@mui/material/colors'

type ViewInfoProps = {
  title?: string
  margin?: string
  padding?: string
  borderRadius?: string
  titlewidth?: string
  infoMarginLeft?: string
  required?: boolean
}
/**
 * 詳細情報を表示する部品
 *
 * @param props
 * @returns
 */
export const ViewDetailInfo = (props: ViewInfoProps & BoxProps) => {
  const { title, children, margin, padding, borderRadius, titlewidth, infoMarginLeft, required } = props
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
            <span hidden={!required}>
              <Typography sx={{ display: 'inline' }} color={red[700]}>
                *
              </Typography>
            </span>
          </Typography>
        </Box>
        {/* 情報 */}
        <Box sx={{ marginLeft: infoMarginLeft, height: '100% ' }}>{children}</Box>
      </Box>
    </>
  )
}

/**
 * デフォルトProps
 */
ViewDetailInfo.defaultProps = {
  borderRadius: '10px',
  margin: '5px',
  padding: '5px',
  titlewidth: '120px',
  infoMarginLeft: '130px',
  required: false,
}

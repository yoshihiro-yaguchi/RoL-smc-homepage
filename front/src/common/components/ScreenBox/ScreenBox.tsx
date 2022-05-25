import { Box, BoxProps } from '@mui/material'

/**
 * RoLホームページのサイズに合わせたボックス。
 *
 * @param props
 * @returns
 */
export const ScreenBox = (props: BoxProps) => {
  const { children } = props

  return (
    <>
      <Box sx={{ maxWidth: '1080px', margin: '100px auto' }} {...props}>
        {children}
      </Box>
    </>
  )
}

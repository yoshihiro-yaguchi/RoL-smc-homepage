import { Box, BoxProps } from '@mui/material'
import { blueGrey } from '@mui/material/colors'

export const ViewDetailInfoBox = (props: BoxProps) => {
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

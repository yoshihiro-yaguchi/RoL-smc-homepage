import { Box, BoxProps, Typography } from '@mui/material'
import { common } from '@mui/material/colors'

type Props = {
  title: string
  date: string
  blogId: string
}

export const Cell = (props: Props & BoxProps) => {
  const { title, date, blogId } = props
  return (
    <>
      <Box
        {...props}
        sx={{
          float: 'left',
          width: '329px',
          backgroundColor: common['white'],
          margin: '2px 2px',
          borderRadius: '5px',
          padding: '0 5px',
          overflow: 'auto',
        }}
      >
        <Box>
          <Typography fontSize={20}>
            <strong>{title}</strong>
          </Typography>
        </Box>
        <Box sx={{ float: 'left' }}>
          <Typography fontSize={13}>date : {date}</Typography>
        </Box>
        <Box sx={{ float: 'right', marginRight: '2px' }}>
          <Typography fontSize={11}>ID : {blogId}</Typography>
        </Box>
      </Box>
    </>
  )
}

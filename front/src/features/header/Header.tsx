import { Box, Button, Typography } from '@mui/material'
import Image from 'logo/RoL.png'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <>
      <Box sx={{ width: '100%', height: '100px' }}>
        {/* ロゴ */}
        <Box sx={{ float: 'left' }}>
          <Link to="/">
            <img src={Image} alt="Image" width={'80px'} height={'80px'} />
          </Link>
        </Box>
        {/* ページ切り替えボタン */}
        <Box>
          {/* About */}
          <Button>
            <Typography>About</Typography>
          </Button>
          {/* Business */}
          <Button>
            <Typography>Business</Typography>
          </Button>
          {/* Blog */}
          <Button>
            <Typography>Blog</Typography>
          </Button>
          {/* CONTACT */}
          <Button>
            <Typography>CONTACT</Typography>
          </Button>
        </Box>
      </Box>
    </>
  )
}

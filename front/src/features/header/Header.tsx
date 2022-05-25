import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'
import Image from 'pic/header/RoL.png'
import { Link, useNavigate } from 'react-router-dom'
import { HeaderButton } from './components/HeaderButton'
import { brown } from '@mui/material/colors'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { RootState } from 'redux/store'
import { headerOperations } from './operations'
import { ROUTER_ENUM } from 'common/rolCommons'
import { grey } from '@mui/material/colors'

export const Header = () => {
  const HeaderBox = styled(Box)({
    // width: '1440px',
    height: '80px',
    borderBottom: '1px solid black',
    // position: 'fixed',
    top: '0',
    backgroundColor: grey[50],
    zIndex: '100',
  })

  // navigate使用宣言
  const navigate = useNavigate()

  // dispatch使用宣言
  const dispatch = useAppDispatch()

  // セレクタ使用宣言
  const screenState = useAppSelector((state: RootState) => state.header.headerScreenState)

  // ボタンクリックハンドラ
  const onClickAboutButtonHandle = () => {
    dispatch(headerOperations.onClickButtonOperation(ROUTER_ENUM.about, navigate))
  }
  // ボタンクリックハンドラ
  const onClickBusinessButtonHandle = () => {
    dispatch(headerOperations.onClickButtonOperation(ROUTER_ENUM.business, navigate))
  }
  // ボタンクリックハンドラ
  const onClickBlogButtonHandle = () => {
    dispatch(headerOperations.onClickButtonOperation(ROUTER_ENUM.blog, navigate))
  }
  // ボタンクリックハンドラ
  const onClickContactButtonHandle = () => {
    dispatch(headerOperations.onClickButtonOperation(ROUTER_ENUM.contact, navigate))
  }

  return (
    <>
      <HeaderBox>
        {/* ロゴ */}
        <Box sx={{ float: 'left' }}>
          <Link to="/">
            <img src={Image} alt="logos" width={'80px'} height={'80px'} />
          </Link>
        </Box>
        {/* ページ切り替えボタン */}
        <Box sx={{ float: 'right', backgroundColor: brown[900] }}>
          {/* About */}
          <HeaderButton sx={screenState.aboutStyle} name={ROUTER_ENUM.about} onClick={() => onClickAboutButtonHandle()}>
            <Typography>About</Typography>
          </HeaderButton>
          {/* Business */}
          <HeaderButton
            sx={screenState.businessStyle}
            name={ROUTER_ENUM.business}
            onClick={() => onClickBusinessButtonHandle()}
          >
            <Typography>Business</Typography>
          </HeaderButton>
          {/* Blog */}
          <HeaderButton sx={screenState.blogStyle} name={ROUTER_ENUM.blog} onClick={() => onClickBlogButtonHandle()}>
            <Typography>Blog</Typography>
          </HeaderButton>
          {/* CONTACT */}
          <HeaderButton
            sx={screenState.contactStyle}
            name={ROUTER_ENUM.contact}
            onClick={() => onClickContactButtonHandle()}
          >
            <Typography>CONTACT</Typography>
          </HeaderButton>
        </Box>
      </HeaderBox>
    </>
  )
}

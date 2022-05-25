import { Box, Typography } from '@mui/material'
import { ScreenBox, ViewDetailInfoBox } from 'common/commonComponents'
import { ROUTER_ENUM } from 'common/rolCommons'
import { headerOperations } from 'features/header/operations'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from 'redux/hooks'
import { ViewDetailInfo } from 'common/commonComponents'
import aboutImage from 'pic/about/23787021_l.jpg'
import { common } from '@mui/material/colors'

export const About = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    dispatch(headerOperations.onClickButtonOperation(ROUTER_ENUM.about, navigate))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      {/* コンテンツトップイメージ */}
      <Box
        sx={{
          width: '100%',
          marginTop: '100px',
        }}
      >
        <img
          src={aboutImage}
          alt="aboutImage"
          style={{ width: '100%', height: '500px', objectFit: 'none', borderRadius: '10px' }}
        />
        <Typography
          color={common['white']}
          fontSize={100}
          sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -70%)' }}
        >
          <strong>About Me.</strong>
        </Typography>
      </Box>
      {/* コンテンツ */}
      <ScreenBox>
        {/* タイトル */}
        <Box>
          <Typography fontSize={25}>
            <strong>About Me.</strong>
          </Typography>
        </Box>
        <Box>
          {/* 詳細情報 */}
          <ViewDetailInfoBox>
            {/* 名前 */}
            <ViewDetailInfo title="名前">
              <Typography>矢口 能拓</Typography>
            </ViewDetailInfo>
            {/* 経歴 */}
            <ViewDetailInfo title="経歴">
              <Typography>京都にてWebアプリケーションの開発などを指定おります。</Typography>
              <Typography>2019年よりアルバイトでWebアプリケーションの開発を始める。</Typography>
              <Typography>
                2020年から現在にかけて京都市内のシステム開発会社でプログラミングなどの業務を行う。
              </Typography>
            </ViewDetailInfo>
            {/* 名称 */}
            <ViewDetailInfo title="名称">
              <Typography>RoL;</Typography>
            </ViewDetailInfo>
            {/* 所在地 */}
            <ViewDetailInfo title="所在地">
              <Typography>京都市内</Typography>
            </ViewDetailInfo>
            {/* お問い合わせ */}
            <ViewDetailInfo title="お問い合わせ">
              <Typography>yoshihiro-yaguchi@gmail.com</Typography>
            </ViewDetailInfo>
            {/* 事業内容 */}
            <ViewDetailInfo title="事業内容">
              <Typography>Webページ開発事業</Typography>
              <Typography>Webアプリケーション開発事業</Typography>
            </ViewDetailInfo>
            {/* 技術スタック */}
            <ViewDetailInfo borderRadius="5px" title="技術スタック">
              <ViewDetailInfo margin="0px 5px" padding="0px 5px" title="言語・FW">
                <Typography>{'・Java'}</Typography>
                <Typography>{' └ Spring'}</Typography>
                <Typography>{' └ SpringBoot'}</Typography>
                <Typography>{' └ MyBatis3'}</Typography>
                <Typography>{'・JavaScript'}</Typography>
                <Typography>{' └ TypeScript'}</Typography>
                <Typography>{' └ React'}</Typography>
                <Typography>{' └ Redux'}</Typography>
              </ViewDetailInfo>
              <ViewDetailInfo title="データベース">
                <Typography>{'・MySQL'}</Typography>
                <Typography>{'・PostgreSQL'}</Typography>
              </ViewDetailInfo>
              <ViewDetailInfo title="その他">
                <Typography>{'・GoogleCloudPlatform'}</Typography>
                <Typography>{'・Docker'}</Typography>
                <Typography>{'・Git'}</Typography>
                <Typography>{'・GitHub'}</Typography>
                <Typography>{'・Subversion'}</Typography>
              </ViewDetailInfo>
            </ViewDetailInfo>
          </ViewDetailInfoBox>
        </Box>
      </ScreenBox>
    </>
  )
}

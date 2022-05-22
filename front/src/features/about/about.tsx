import { Box, Typography } from '@mui/material'
import { ScreenBox, ViewDetailInfoBox } from 'common/commonComponents'
import { ROUTER_ENUM } from 'common/rolCommons'
import { headerOperations } from 'features/header/operations'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { RootState } from 'redux/store'
import { blueGrey } from '@mui/material/colors'
import { ViewDetailInfo } from 'common/commonComponents'

export const About = () => {
  const pxzzjh000Actions = useAppSelector((state: RootState) => state.header)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    dispatch(headerOperations.onClickButtonOperation(ROUTER_ENUM.about, navigate))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <ScreenBox>
        {/* タイトル */}
        <Box>
          <Box>
            <Typography fontSize={25}>
              <strong>About : 矢口 能拓</strong>
            </Typography>
          </Box>
        </Box>
        {/* コンテンツ */}
        <Box>
          {/* 詳細情報 */}
          <ViewDetailInfoBox>
            {/* 経歴 */}
            <ViewDetailInfo borderRadius="10px" margin="5px" padding="5px" title="経歴">
              <Typography>京都にてWebアプリケーションの開発などを指定おります。</Typography>
              <Typography>2019年よりアルバイトでWebアプリケーションの開発を始める。</Typography>
              <Typography>
                2020年から現在にかけて京都市内のシステム開発会社でプログラミングなどの業務を行う。
              </Typography>
            </ViewDetailInfo>
            {/* 名称 */}
            <ViewDetailInfo borderRadius="10px" margin="5px" padding="5px " title="名称">
              <Typography>RoL;</Typography>
            </ViewDetailInfo>
            {/* 所在地 */}
            <ViewDetailInfo borderRadius="10px" margin="5px 5px" padding="5px 5px" title="所在地">
              <Typography>京都市内</Typography>
            </ViewDetailInfo>
            {/* お問い合わせ */}
            <ViewDetailInfo borderRadius="10px" margin="5px 5px" padding="5px 5px" title="お問い合わせ">
              <Typography>yoshihiro-yaguchi@gmail.com</Typography>
            </ViewDetailInfo>
            {/* 事業内容 */}
            <ViewDetailInfo borderRadius="10px" margin="5px 5px" padding="5px 5px" title="事業内容">
              <Typography>Webページ開発事業</Typography>
              <Typography>Webアプリケーション開発事業</Typography>
            </ViewDetailInfo>
            {/* 技術スタック */}
            <ViewDetailInfo borderRadius="5px" margin="5px 5px" padding="5px 5px" title="技術スタック">
              <ViewDetailInfo title="言語・FW">
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

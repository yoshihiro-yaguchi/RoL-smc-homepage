import { useEffect } from 'react'
import { useAppDispatch } from 'redux/hooks'
import { ROUTER_ENUM } from 'common/rolCommons'
import BusinessImage from 'pic/business/startup-g0fe3ef605_1920.jpg'
import { Box, Typography } from '@mui/material'
import { common } from '@mui/material/colors'
import { ScreenBox, ViewDetailInfo, ViewDetailInfoBox } from 'common/commonComponents'
import { useNavigate } from 'react-router-dom'
import { headerOperations } from 'features/header/operations'

export const Business = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    dispatch(headerOperations.onClickButtonOperation(ROUTER_ENUM.business, navigate))
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
          src={BusinessImage}
          alt="BusinessImage"
          style={{ width: '100%', height: '500px', objectFit: 'none', borderRadius: '10px' }}
        />
        <Typography
          color={common['white']}
          fontSize={100}
          sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -120%)' }}
        >
          <strong>Business.</strong>
        </Typography>
      </Box>

      {/* コンテンツ */}
      <ScreenBox>
        {/* タイトル */}
        <Box>
          <Box>
            <Typography fontSize={25}>
              <strong>Business.</strong>
            </Typography>
          </Box>
        </Box>
        <Box>
          <ViewDetailInfoBox>
            <ViewDetailInfo infoMarginLeft="230px" titlewidth="220px" title="Webサイト開発">
              <Typography>Webサイト開発の企画からリリースまで実施します。</Typography>
              <ViewDetailInfo title="企画">
                <Typography>
                  <strong>STEP1.プロジェクト企画</strong>
                </Typography>
                <Typography>目的やターゲットを明確にし、市場調査や分析を行い、Webサイトの企画を固めます。</Typography>
              </ViewDetailInfo>
              <ViewDetailInfo title="設計">
                <Box>
                  <Typography>
                    <strong>STEP2.Webサイト設計</strong>
                  </Typography>
                  <Typography>
                    ユーザー体験を設計し、どのようなコミュニケーションを行うか、その際にどのような媒体でコンテンツを提供するかなど検討します。
                  </Typography>
                </Box>
              </ViewDetailInfo>
              <ViewDetailInfo title="デザイン制作">
                <Typography>
                  <strong>STEP3.デザイン制作</strong>
                </Typography>
                <Typography>コンセプトやルールを決めて、より最適なデザインを作ります。</Typography>
              </ViewDetailInfo>
              <ViewDetailInfo title="実装">
                <Typography>
                  <strong>STEP4.実装-システム開発、コーディング</strong>
                </Typography>
                <Typography>設計やデザインをWebサイトに反映していきます。</Typography>
              </ViewDetailInfo>
              <ViewDetailInfo title="リリース">
                <Typography>
                  <strong>STEP5.リリース</strong>
                </Typography>
                <Typography>最終確認を行い、リリースします。</Typography>
              </ViewDetailInfo>
            </ViewDetailInfo>
            <ViewDetailInfo infoMarginLeft="230px" titlewidth="220px" title="Webアプリケーション開発">
              <Box>
                <Typography>お客様の業務を効率化するWebアプリケーションを作成します。</Typography>
              </Box>
              <Box sx={{ marginTop: '10px' }}>
                <Typography>
                  <strong>Webアプリケーションとは？</strong>
                </Typography>
                <Typography>
                  Webアプリケーションとは利用者からの要求に応じて、データを検索・動的にデータを表示させると言った機能を実現する仕組みです。
                </Typography>
                <Typography>
                  Webサイトと混同されがちですが、一般的にWebサイトは企業ホームページと言った静的コンテンツを表示する仕組みです。
                </Typography>
              </Box>
              <ViewDetailInfo infoMarginLeft="250px" titlewidth="230px" title="Webアプリケーションの特徴">
                <Box>
                  <Typography>
                    <strong>個別のインストールが不要</strong>
                  </Typography>
                  <Typography>
                    Webブラウザあさえあれば、即座に利用できるので、利用者の利便性が高いのが特徴です。
                  </Typography>
                </Box>
                <Box sx={{ marginTop: '10px' }}>
                  <Typography>
                    <strong>利用者の環境に依存しない</strong>
                  </Typography>
                  <Typography>Webブラウザ上で利用するため、利用者端末のOSやデバイスの違いに依存しません。</Typography>
                  <Typography>利用者はWebブラウザさえあれば自由に使えるメリットがあります。</Typography>
                </Box>
              </ViewDetailInfo>
            </ViewDetailInfo>
          </ViewDetailInfoBox>
        </Box>
      </ScreenBox>
    </>
  )
}

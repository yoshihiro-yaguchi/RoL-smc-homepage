import { Box, Button, TextField, Typography } from '@mui/material'
import { ScreenBox, ViewDetailInfo, ViewDetailInfoBox } from 'common/commonComponents'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { RootState } from 'redux/store'
import { Send } from '@mui/icons-material'
import contctImage from 'pic/contact/phone-ga8162a39d_1920.jpg'
import { common } from '@mui/material/colors'
import { actions as contactActions } from './reducer'

export const Contact = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(contactActions.init())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const contactStates = useAppSelector((s: RootState) => s.contact.contactState)

  const onInputHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(contactActions.onInputHandle({ name: e.target.name, value: e.target.value }))
  }

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
          src={contctImage}
          alt="contactImage"
          style={{ width: '100%', height: '500px', objectFit: 'none', borderRadius: '10px' }}
        />
        <Typography
          color={common['white']}
          fontSize={100}
          sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -120%)' }}
        >
          <strong>Contact.</strong>
        </Typography>
      </Box>

      <ScreenBox>
        <Box>
          <Typography fontSize={25}>
            <strong>Contact.</strong>
          </Typography>
        </Box>
        <ViewDetailInfoBox>
          {/* 貴社名 */}
          <ViewDetailInfo padding={'10px 5px'} titlewidth="140px" infoMarginLeft="160px" title={`貴社名`}>
            <TextField
              name="companyName"
              value={contactStates.companyName}
              size="small"
              label="貴社名"
              variant="outlined"
              onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                onInputHandle(e)
              }}
            />
          </ViewDetailInfo>
          {/* お名前 */}
          <ViewDetailInfo padding={'10px 5px'} titlewidth="140px" infoMarginLeft="160px" title={`お名前`} required>
            <TextField
              name="userName"
              value={contactStates.userName}
              size="small"
              label="お名前"
              variant="outlined"
              onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                dispatch(contactActions.onInputHandle({ name: e.target.name, value: e.target.value }))
              }}
            />
          </ViewDetailInfo>
          {/* メールアドレス */}
          <ViewDetailInfo
            padding={'10px 5px'}
            titlewidth="140px"
            infoMarginLeft="160px"
            title="メールアドレス"
            required
          >
            <TextField
              name="mailAddress"
              value={contactStates.mailAddress}
              size="small"
              label="メールアドレス"
              variant="outlined"
              onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                onInputHandle(e)
              }}
            />
          </ViewDetailInfo>
          {/* 電話番号 */}
          <ViewDetailInfo padding={'10px 5px'} titlewidth="140px" infoMarginLeft="160px" title="電話番号">
            <TextField
              name="telephoneNumber"
              value={contactStates.telephoneNumber}
              size="small"
              label="電話番号"
              variant="outlined"
              onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                onInputHandle(e)
              }}
            />
          </ViewDetailInfo>
          {/* お問い合わせ内容 */}
          <ViewDetailInfo
            padding={'10px 5px'}
            titlewidth="140px"
            infoMarginLeft="160px"
            title="お問い合わせ内容"
            required
          >
            <TextField
              name="contents"
              value={contactStates.contents}
              size="small"
              variant="outlined"
              multiline
              rows={5}
              fullWidth
              label="お問い合わせ内容"
              onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                onInputHandle(e)
              }}
            />
          </ViewDetailInfo>
          <Box sx={{ overflow: 'auto' }}>
            <Button sx={{ marginRight: '5px', float: 'right' }} variant="contained" endIcon={<Send />}>
              送信
            </Button>
          </Box>
        </ViewDetailInfoBox>
      </ScreenBox>
    </>
  )
}

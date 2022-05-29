import {
  Alert,
  Box,
  Button,
  Collapse,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  TextField,
  Typography,
} from '@mui/material'
import { Close } from '@mui/icons-material'
import { ErrorDialog, ScreenBox, ViewDetailInfo, ViewDetailInfoBox } from 'common/commonComponents'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { RootState } from 'redux/store'
import { Send } from '@mui/icons-material'
import contctImage from 'pic/contact/phone-ga8162a39d_1920.jpg'
import { common } from '@mui/material/colors'
import { actions as contactActions } from './reducer'
import { contactOperations } from './operations'

export const Contact = () => {
  const dispatch = useAppDispatch()
  // 画面項目
  const contactStates = useAppSelector((s: RootState) => s.contact.contactState)
  // 画面コントロール
  const contactScreenControl = useAppSelector((s: RootState) => s.contact.contactScreenControlState)

  // 値入力時ハンドラ
  const onInputHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(contactActions.onInputHandle({ name: e.target.name, value: e.target.value }))
  }

  // 送信ボタン押下時ハンドラ
  const onClickSendButton = () => {
    dispatch(contactOperations.onClickSend())
  }

  // ダイアログキャンセルボタン押下時ハンドラ
  const onClickDialogCancelButton = () => {
    dispatch(contactActions.controlConfilmDialog({ open: false }))
  }

  // ダイアログ送信ボタン押下時ハンドラ
  const onClickDialogSendButton = () => {
    dispatch(contactOperations.onClickConfirmDialogOk())
  }

  // 送信成功閉じるボタン押下時
  const onClickSuccessAlertClose = () => {
    dispatch(contactActions.controlSuccessAlert({ open: false }))
  }

  // 送信失敗閉じるボタン押下時
  const onClickErrorAlertClose = () => {
    dispatch(contactActions.controlErrorAlert({ open: false }))
  }

  // エラーダイアログOK押下時
  const errorDialogOnOk = () => {
    dispatch(contactActions.controlErrorDialog({ open: false }))
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
          sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -70%)' }}
        >
          <strong>Contact.</strong>
        </Typography>
      </Box>

      {/* コンテンツ */}
      <ScreenBox>
        <Box>
          <Typography fontSize={25}>
            <strong>Contact.</strong>
          </Typography>
        </Box>
        <ViewDetailInfoBox>
          {/* 貴社名 */}
          <ViewDetailInfo padding={'10px 5px'} titlewidth="150px" infoMarginLeft="160px" title={`貴社名`}>
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
          <ViewDetailInfo padding={'10px 5px'} titlewidth="150px" infoMarginLeft="160px" title={`お名前`} required>
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
            titlewidth="150px"
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
          <ViewDetailInfo padding={'10px 5px'} titlewidth="150px" infoMarginLeft="160px" title="電話番号">
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
            titlewidth="150px"
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
          {/* 送信ボタン */}
          <Box sx={{ overflow: 'auto' }}>
            <Button
              sx={{ marginRight: '5px', float: 'right' }}
              variant="contained"
              endIcon={<Send />}
              onClick={() => onClickSendButton()}
            >
              送信
            </Button>
          </Box>
        </ViewDetailInfoBox>
      </ScreenBox>
      {/* 確認ダイアログ */}
      <Dialog open={contactScreenControl.confirmDialogOpen} maxWidth={'md'} fullWidth={true}>
        <DialogTitle>以下の内容で送信しますか？</DialogTitle>
        <DialogContent>
          <Box>
            <DialogContentText>{`貴社名 : ${contactStates.companyName}`}</DialogContentText>
            <DialogContentText>{`お名前 : ${contactStates.userName}`}</DialogContentText>
            <DialogContentText>{`メールアドレス : ${contactStates.mailAddress}`}</DialogContentText>
            <DialogContentText>{`電話番号 : ${contactStates.telephoneNumber}`}</DialogContentText>
            <DialogContentText>{`お問い合わせ内容 : ${contactStates.contents}`}</DialogContentText>
          </Box>
          <Box>
            <Box sx={{ float: 'right' }}>
              <Button
                sx={{ margin: '5px 10px' }}
                variant="outlined"
                color="error"
                onClick={() => onClickDialogCancelButton()}
              >
                キャンセル
              </Button>
              <Button
                sx={{ margin: '5px 10px' }}
                variant="contained"
                color="success"
                onClick={() => onClickDialogSendButton()}
                endIcon={<Send />}
              >
                送信
              </Button>
            </Box>
          </Box>
        </DialogContent>
      </Dialog>

      {/* エラーダイアログ */}
      <ErrorDialog
        open={contactScreenControl.errorDialogOpen}
        errors={contactScreenControl.errors}
        onOk={() => errorDialogOnOk()}
      />
      <Box sx={{ width: '300px', position: 'fixed', top: '300px', right: '50px' }}>
        {/* 送信成功アラート */}
        <Collapse in={contactScreenControl.sendSuccessDialogOpen}>
          <Alert
            action={
              <IconButton size="small" onClick={() => onClickSuccessAlertClose()}>
                <Close fontSize="inherit" />
              </IconButton>
            }
            severity="success"
          >
            送信しました。
          </Alert>
        </Collapse>
        {/* 送信失敗アラート */}
        <Collapse in={contactScreenControl.sendErrorDialogOpen}>
          <Alert
            action={
              <IconButton size="small" onClick={() => onClickErrorAlertClose()}>
                <Close fontSize="inherit" />
              </IconButton>
            }
            severity="error"
          >
            送信に失敗しました。
          </Alert>
        </Collapse>
      </Box>
    </>
  )
}

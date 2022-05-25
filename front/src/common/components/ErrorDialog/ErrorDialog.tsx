import { Button, Dialog, DialogContent, DialogContentText, DialogTitle, Typography } from '@mui/material'
import { red } from '@mui/material/colors'

type Props = {
  errors: string[]
  open: boolean
  onOk: () => void
}

export const ErrorDialog = (props: Props) => {
  const { errors, open, onOk } = props
  return (
    <>
      <Dialog open={open} maxWidth={'md'} fullWidth={true}>
        <DialogTitle>エラーが発生しました。</DialogTitle>
        <DialogContent>
          {errors.map((error: string) => (
            <DialogContentText>
              <Typography color={red[300]}>
                <strong>{`・${error}`}</strong>
              </Typography>
            </DialogContentText>
          ))}
          <Button
            sx={{ margin: '5px 10px', float: 'right' }}
            variant="contained"
            color="warning"
            onClick={() => onOk()}
          >
            OK
          </Button>
        </DialogContent>
      </Dialog>
    </>
  )
}

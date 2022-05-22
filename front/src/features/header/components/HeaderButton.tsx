import styled from '@emotion/styled'
import { Box, Button, ButtonProps } from '@mui/material'

type Props = {
  name?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  children?: React.ReactNode
}

export const HeaderButton = (props: Props & ButtonProps) => {
  const { name, onClick, children } = props
  const ButtonBox = styled(Box)({
    float: 'left',
    margin: '20px 10px',
  })
  const HeaderButtonStyled = styled(Button)({
    borderRadius: '0px',
    float: 'left',
    width: '110px',
    height: '40px',
    color: 'white',
  })
  return (
    <>
      <ButtonBox>
        <HeaderButtonStyled {...props} name={name} onClick={onClick}>
          {children}
        </HeaderButtonStyled>
      </ButtonBox>
    </>
  )
}

import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { RootState } from 'redux/store'
import { pzzjg000Operations } from './operations'

export const Business = () => {
  const pxzzjh000Actions = useAppSelector((state: RootState) => state.pzzhg000)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(pzzjg000Operations.init())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <>
      <p>business</p>
    </>
  )
}

import { useEffect } from 'react'
// TODO: コメントアウトの削除
import { useAppDispatch /** , useAppSelector */ } from 'redux/hooks'
// TODO: コメントアウトの削除
// import { RootState } from 'redux/store'
import { pzzjg000Operations } from './operations'

// TODO:関数名の変更
export const Pzzhg000 = () => {
  // const pxzzjh000Actions = useAppSelector((state: RootState) => state.header)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(pzzjg000Operations.init())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <>
      {/* <p>count: {pxzzjh000Actions.header.counter}</p> */}
      <button onClick={() => dispatch(pzzjg000Operations.countUp(1))}>加算</button>
      <button onClick={() => dispatch(pzzjg000Operations.countUp(-1))}>減算</button>
    </>
  )
}

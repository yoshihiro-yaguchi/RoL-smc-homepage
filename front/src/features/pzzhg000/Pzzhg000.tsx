import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { RootState } from 'redux/store'
import { pzzjg000Operations } from './operations'

export const Pzzhg000 = () => {
  const pxzzjh000Actions = useAppSelector((state: RootState) => state.pzzhg000Actions)
  const dispatch = useAppDispatch()
  return (
    <>
      <p>count: {pxzzjh000Actions.pzzjg000FormState.counter}</p>
      <button onClick={() => dispatch(pzzjg000Operations.countUp(1))}>加算</button>
      <button onClick={() => dispatch(pzzjg000Operations.countUp(-1))}>減算</button>
    </>
  )
}

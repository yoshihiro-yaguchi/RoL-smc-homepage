import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import { pzzhg000States } from 'features/pzzhg000/reducer'
import { pzzhg001States } from 'features/pzzhg001/reducer'

export const store = configureStore({
  reducer: {
    pzzhg000: pzzhg000States.reducer,
    pzzhg001: pzzhg001States.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>

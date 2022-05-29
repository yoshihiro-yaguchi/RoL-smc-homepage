import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import { blogContentStates } from 'features/blog/blogContent/reducer'
import { blogSummaryStates } from 'features/blog/blogSummary/reducer'
import { contactStates } from 'features/contact/reducer'
import { headerStates } from 'features/header/reducer'

export const store = configureStore({
  reducer: {
    header: headerStates.reducer,
    contact: contactStates.reducer,
    blogSummary: blogSummaryStates.reducer,
    blogContent: blogContentStates.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>

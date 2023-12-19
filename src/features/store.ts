import { configureStore } from '@reduxjs/toolkit'
import prayersSlice from './reducers/prayersSlice'
import countriesSlice from './reducers/countriesSlice'

export const store = configureStore({
  reducer: {
    prayers: prayersSlice,
    countries: countriesSlice,
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
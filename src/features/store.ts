import { configureStore } from '@reduxjs/toolkit'
import prayersSlice from './reducers/prayersSlice'
import countriesSlice from './reducers/countriesSlice'
import citiesSlice from './reducers/citiesSlice'

const store = configureStore({
  reducer: {
    prayers: prayersSlice,
    countries: countriesSlice,
    cities: citiesSlice,
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
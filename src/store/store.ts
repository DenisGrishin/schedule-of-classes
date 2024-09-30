import { configureStore } from '@reduxjs/toolkit'
import authSlice from './slice/authSlice'
import commonSlice from './slice/commonSlice'

// ...

export const store = configureStore({
  reducer: {
authR : authSlice,
commonR:commonSlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
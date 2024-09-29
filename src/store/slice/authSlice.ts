import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store/store'



// Define a type for the slice state
interface CounterState {
  isAuth: boolean
} 

// Define the initial state using that type
const initialState: CounterState = {
  isAuth: false,
} satisfies CounterState as CounterState

export const authSlice = createSlice({
  name: 'auth',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    isLogin: (state) => {
   
      state.isAuth = true
    },
    isLogOut:(state)=>{
      state.isAuth = false
    }

  },
})

export const { isLogin,isLogOut } = authSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.auth.value

export default authSlice.reducer
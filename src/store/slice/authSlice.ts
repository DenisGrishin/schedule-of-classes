import { createSlice } from '@reduxjs/toolkit'




// Define a type for the slice state
interface AuthState {
  isAuth: boolean
  userUID:string
} 

// Define the initial state using that type
const initialState: AuthState = {
  isAuth: false,
  userUID:'',
} satisfies AuthState as AuthState

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    isLogin: (state) => {
   
      state.isAuth = true
    },
    isLogOut:(state)=>{
      state.isAuth = false
    },
    getUserUID:(state,action)=>{
      state.userUID = action.payload
    }
  },
})

export const { isLogin,isLogOut,getUserUID } = authSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.authR.value

export default authSlice.reducer
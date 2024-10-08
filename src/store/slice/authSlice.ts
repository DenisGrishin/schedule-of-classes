import { createSlice } from '@reduxjs/toolkit'




// Define a type for the slice state
interface AuthState {
  isAuth: boolean;
  userUID:string;
  isRemember:boolean;
} 

// Define the initial state using that type
const initialState: AuthState = {
  isAuth: false,
  userUID:'',
  isRemember:false,
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
    },
    gerIsRemember:(state,action)=>{
      state.isRemember = action.payload

    }
  },
})

export const { isLogin,isLogOut,getUserUID ,gerIsRemember} = authSlice.actions


export default authSlice.reducer
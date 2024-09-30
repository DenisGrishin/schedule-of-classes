import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'





// Define a type for the slice state
interface commonState {
  isPreloader:boolean
} 

// Define the initial state using that type
const initialState: commonState = {
isPreloader:false,
} 

export const commonSlice = createSlice({
  name: 'common',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
toggleIsPreloader:(state,action)=>{
state.isPreloader = action.payload
}
    }
  },
)

export const { toggleIsPreloader} = commonSlice.actions



export default commonSlice.reducer
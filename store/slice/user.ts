import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { userDetailsI, userI } from '../../resources/interfaces'


const initialState = {
  user: {
        image: '',
        email: '',
        name: ''
    },
    status:'',  
} as userI

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUserData: (state, action:PayloadAction<userDetailsI>) => {
            state.user= action.payload
        }
    }
})

export const { addUserData} = userSlice.actions

export default userSlice.reducer
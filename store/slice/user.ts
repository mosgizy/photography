import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { userDetailsI, userI } from '../../resources/interfaces'


const initialState = {
  user: {
        image: '',
        email: '',
        name: ''
    },
    modal:false,  
} as userI

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUserData: (state, action:PayloadAction<userDetailsI>) => {
            state.user= action.payload
        },

        setModal: (state, action: PayloadAction<boolean>) => {
            state.modal= action.payload
        }
    }
})

export const { addUserData,setModal} = userSlice.actions

export default userSlice.reducer
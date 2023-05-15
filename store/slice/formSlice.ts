import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { shoppingFormI } from '../../resources/interfaces'

const initialState = {
    formInfo: {
        email: '',
        name: '',
        walletType: '',
        city: '',
   	    country: '',
        postalCode: 0,
        phoneNumber: 0,
        getUpdate: false,
    }  
} 

export const formSlice = createSlice({
    name: "form",
    initialState,
    reducers: {
        getFormData: (state, action:PayloadAction<shoppingFormI>) => {
            state.formInfo = {...action.payload}
        }
    }
})

export const { getFormData } = formSlice.actions

export default formSlice.reducer
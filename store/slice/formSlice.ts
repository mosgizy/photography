import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { shoppingFormI } from '../../resources/interfaces'

const initialState = {
    details: {
        email: '',
        name: '',
	    walletType: '',
	    city: '',
    	country: '',
	    postalCode: 0,
	    phoneNumber: 0,
	    getUpdate: false,
    },
} as {details:shoppingFormI}

export const formSlice = createSlice({
    name: "form",
    initialState,
    reducers: {
        getFormData: (state, action) => {
            state.details = action.payload
        }
    }
})

export const { getFormData } = formSlice.actions

export default formSlice.reducer
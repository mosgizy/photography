import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { cartI,cartItemI } from '../../resources/interfaces'

const initialState = {
    items: [],
    totalItems:0,
    totalPrice:0,
    shipping:2.50,
    grandTotal: 0,
    size:0
} as cartI

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<cartItemI>) => {
            state.items.push(action.payload)
        },
        removeItemFromCart: (state, action: PayloadAction<string>) => {
            let tempItems = state.items.filter(item => item.id !== action.payload)
            state.items = tempItems
        },
        itemQuantityChange: (state, action: PayloadAction<{id:string,quantity:number}>) => {
            let [tempItems] = state.items.filter(item => item.id === action.payload.id)
            let replacement = { ...tempItems, quantity: action.payload.quantity }
            state.items.splice(state.items.indexOf(tempItems),1,replacement)
        }
    }
})

export const { addToCart,removeItemFromCart,itemQuantityChange } = cartSlice.actions

export default cartSlice.reducer
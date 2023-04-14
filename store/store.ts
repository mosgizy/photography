import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './slice/cart'
import formSlice from './slice/formSlice'

export const store = configureStore({
    reducer: {
        cart: cartSlice,
        form: formSlice,  
    },
    devTools:true
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './slice/cart'
import formSlice from './slice/formSlice'
import userSlice from './slice/user'

export const store = configureStore({
    reducer: {
        cart: cartSlice,
        form: formSlice,  
        user: userSlice,
    },
    devTools: process.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

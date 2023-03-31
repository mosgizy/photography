import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './slice/cart'

export const store = configureStore({
    reducer: {
      cart: cartSlice
    },
    devTools:true
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

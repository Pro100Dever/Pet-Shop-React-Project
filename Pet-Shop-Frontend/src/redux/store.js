import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './slices/cartSlice'
import formFilterSlice from './slices/formFilterSlice'

const store = configureStore({
  reducer: {
    filters: formFilterSlice,
    cart: cartSlice,
  },
})

export default store

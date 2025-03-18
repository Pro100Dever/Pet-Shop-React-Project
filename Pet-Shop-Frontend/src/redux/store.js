import { configureStore } from '@reduxjs/toolkit'
import cartSclice from './slices/cartSclice'
import formFilterSlice from './slices/formFilterSlice'

const store = configureStore({
  reducer: {
    filters: formFilterSlice,
    cart: cartSclice,
  },
})

export default store

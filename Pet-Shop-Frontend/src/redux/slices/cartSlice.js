import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart: [],
  discount: false,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.cart.find(
        item => item.id === action.payload.id
      )
      if (existingItem) {
        existingItem.count += action.payload.count
      } else {
        state.cart.push({ ...action.payload, count: action.payload.count || 1 })
      }
      localStorage.setItem('cartList', JSON.stringify(state.cart))
    },
    deleteItem: (state, action) => {
      state.cart = state.cart.filter(item => item.id !== action.payload.id)
      localStorage.setItem('cartList', JSON.stringify(state.cart))
    },
    localGet: (state, action) => {
      const localData = JSON.parse(localStorage.getItem('cartList')) || []
      state.cart = localData
    },
    updateItem: (state, action) => {
      const existingItem = state.cart.find(
        item => item.id === action.payload.id
      )
      existingItem.count = action.payload.count
      localStorage.setItem('cartList', JSON.stringify(state.cart))
    },
  },
})

export const { addItem, deleteItem, localGet, updateItem } = cartSlice.actions
export default cartSlice.reducer

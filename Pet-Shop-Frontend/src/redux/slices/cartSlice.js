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

    updateItem: (state, action) => {
      const existingItem = state.cart.find(
        item => item.id === action.payload.id
      )
      existingItem.count = action.payload.count
      localStorage.setItem('cartList', JSON.stringify(state.cart))
    },

    localGet: (state, action) => {
      const localDataCart = JSON.parse(localStorage.getItem('cartList')) || []
      const localDataDiscount =
        JSON.parse(localStorage.getItem('promo')) || false
      state.cart = localDataCart
      state.discount = localDataDiscount
    },

    updateDiscount: state => {
      state.discount = true
      localStorage.setItem('promo', JSON.stringify(true))
    },
    completeOrder: state => {
      state.discount = false
      state.cart = []
      localStorage.removeItem('cartList')
      localStorage.setItem('promo', JSON.stringify(false))
    },
  },
})

export const {
  addItem,
  deleteItem,
  localGet,
  updateItem,
  completeOrder,
  updateDiscount,
} = cartSlice.actions
export default cartSlice.reducer

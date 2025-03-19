import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.find(item => item.id === action.payload.id)
      if (existingItem) {
        existingItem.count += action.payload.count
      } else {
        state.push({ ...action.payload, count: action.payload.count || 1 })
      }
      localStorage.setItem('cartList', JSON.stringify(state))
    },
    deleteItem: (state, action) => {
      const newState = state.filter(item => item.id !== action.payload.id)
      localStorage.setItem('cartList', JSON.stringify(newState))
      return newState
    },
    localGet: (state, action) => {
      const localData = JSON.parse(localStorage.getItem('cartList')) || []
      return localData
    },
    updateItem: (state, action) => {
      const existingItem = state.find(item => item.id === action.payload.id)
      existingItem.count = action.payload.count
      localStorage.setItem('cartList', JSON.stringify(state))
    },
  },
})

export const { addItem, deleteItem, localGet, updateItem } = cartSlice.actions
export default cartSlice.reducer

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
      return state.filter(item => item.id !== action.payload.id)
    },
    localGet: (state, action) => {
      const localData = JSON.parse(localStorage.getItem('cartList')) || []
      return localData
    },
  },
})

export const { addItem, deleteItem, localGet } = cartSlice.actions
export default cartSlice.reducer

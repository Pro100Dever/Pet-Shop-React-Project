import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const cartSclice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.map(item =>
        item.id === action.payload.id ? item : { ...action.payload, count: 1 }
      )
    },
    deleteItem: (state, action) => {
      state.filter(item => item.id !== action.payload.id)
    },
    updateItem: (state, action) => {
      state.map(item => item.id === action.payload.id)
        ? { ...item, count: action.payload.count }
        : item
    },
  },
})
export const { addItem, deleteItem, updateItem } = cartSclice.actions
export default cartSclice.reducer

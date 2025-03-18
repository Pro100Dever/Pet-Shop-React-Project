import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  sort: null,
  priceMin: null,
  priceMax: null,
}

const formFilterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    updateFilter: (state, action) => {
      state = action.payload
    },
  },
})
export const { updateFilter } = formFilterSlice.actions
export default formFilterSlice.reducer

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  sort: 'default',
  priceMin: null,
  priceMax: null,
  checked: null,
}

const formFilterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    updateFilter: (state, action) => {
      console.log(action.payload)

      return action.payload
    },
  },
})
export const { updateFilter } = formFilterSlice.actions
export default formFilterSlice.reducer

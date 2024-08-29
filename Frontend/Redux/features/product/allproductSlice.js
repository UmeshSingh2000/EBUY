import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const allproductSlice = createSlice({
  name: 'allproduct',
  initialState,
  reducers: {
    setAllProduct: (state, action) => {
      state.value = action.payload
    }
  },
})

export const { setAllProduct } = allproductSlice.actions

export default allproductSlice.reducer
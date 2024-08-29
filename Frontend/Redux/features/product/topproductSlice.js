import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const topproductSlice = createSlice({
  name: 'topproduct',
  initialState,
  reducers: {
    setTopProduct: (state, action) => {
      state.value = action.payload
    }
  },
})

export const { setTopProduct } = topproductSlice.actions

export default topproductSlice.reducer
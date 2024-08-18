import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

export const { increment } = menuSlice.actions

export default menuSlice.reducer
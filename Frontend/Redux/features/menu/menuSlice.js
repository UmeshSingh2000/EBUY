import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    menuClick : (state)=>{
      state.value = !state.value
    }
  },
})

export const { menuClick } = menuSlice.actions

export default menuSlice.reducer
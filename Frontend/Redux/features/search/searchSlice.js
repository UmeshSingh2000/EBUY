import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    Searchclick : (state)=>{
      state.value = !state.value
    }
  },
})

export const { Searchclick } = searchSlice.actions

export default searchSlice.reducer
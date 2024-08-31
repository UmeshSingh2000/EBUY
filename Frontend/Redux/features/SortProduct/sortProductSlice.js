import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  men:false,
  women:false,
  kids:false,
}

export const sortProductSlice = createSlice({
  name: 'sortProduct',
  initialState,
  reducers: {
    filterByCategory : (state,action)=>{
      const category = action.payload
      state.men=false;
      state.women=false;
      state.kids=false;
      if(category === 'men') state.men = true;
      if(category === 'women') state.women = true;
      if(category === 'kids') state.kids = true;
    }
  },
})

export const { filterByCategory } = sortProductSlice.actions

export default sortProductSlice.reducer
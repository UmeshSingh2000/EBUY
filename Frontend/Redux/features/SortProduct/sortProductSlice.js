import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  men: false,
  women: false,
  kids: false,
  sizes: [
    {
      checked : false,
      label : 'Xs'
    },
    {
      checked : false,
      label : 'S'
    },
    {
      checked : false,
      label : 'M'
    },
    {
      checked : false,
      label : 'L'
    }
  ]
}

export const sortProductSlice = createSlice({
  name: 'sortProduct',
  initialState,
  reducers: {
    filterByCategory: (state, action) => {
      const category = action.payload
      state.men = false;
      state.women = false;
      state.kids = false;
      if (category === 'men') state.men = true;
      if (category === 'women') state.women = true;
      if (category === 'kids') state.kids = true;
    },
    resetFilter: (state) => {
      state.men = false;
      state.women = false;
      state.kids = false;
    },
    filterBySize: (state,action) => {
      const selectedSize = action.payload
      state.sizes.forEach((size) => {
        if(size.label===selectedSize){
          size.checked=!size.checked
        }
      })
    }
  },
})

export const { filterByCategory, resetFilter,filterBySize } = sortProductSlice.actions

export default sortProductSlice.reducer
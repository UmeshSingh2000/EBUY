import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  men: false,
  women: false,
  kids: false,
  sizes: [
    {
      checked: false,
      label: 'Xs'
    },
    {
      checked: false,
      label: 'S'
    },
    {
      checked: false,
      label: 'M'
    },
    {
      checked: false,
      label: 'L'
    }
  ],
  prices: [
    {
      checked: false,
      label: '100-500'
    },
    {
      checked: false,
      label: '500-1000'
    },
    {
      checked: false,
      label: '1000-1500'
    },
    {
      checked: false,
      label: '1500-2000'
    },
    {
      checked: false,
      label: '2000-2500'
    },
    {
      checked: false,
      label: '2500-3000'
    },
    {
      checked: false,
      label: '>3000'
    },
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
      state.sizes.forEach((size) => {
        size.checked = false
      })
      state.prices.forEach((price)=>{
        price.checked = false
      })
    },
    filterBySize: (state, action) => {
      const selectedSize = action.payload
      state.sizes.forEach((size) => {
        if (size.label === selectedSize) {
          size.checked = !size.checked
        }
      })
    },
    filterByPrice: (state, action) => {
      const selectedPrice = action.payload
      state.prices.forEach((price) => {
        price.checked = false;
      })
      const priceToToggle = state.prices.find((price) => price.label === selectedPrice)
      if (priceToToggle) priceToToggle.checked = !priceToToggle.checked;
    }
  },
})

export const { filterByCategory, resetFilter, filterBySize, filterByPrice } = sortProductSlice.actions

export default sortProductSlice.reducer
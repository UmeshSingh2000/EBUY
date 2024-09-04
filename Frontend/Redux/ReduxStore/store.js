import { configureStore } from '@reduxjs/toolkit'
import menuReducer from '../features/menu/menuSlice'
import topproductReducer from '../features/product/topproductSlice'
import allproductReducer from '../features/product/allproductSlice'
import sortProductReducer from '../features/SortProduct/sortProductSlice'
export const store = configureStore({
  reducer: {
    menu: menuReducer,
    topProduct : topproductReducer,
    allProduct : allproductReducer,
    filterCategory : sortProductReducer,
  },
})
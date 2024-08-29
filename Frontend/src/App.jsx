import React, { useEffect } from 'react'
import Homepage from './Pages/Hompage/Homepage'
import Navbar from './Components/Navbar/Navbar'
import NewArrival from './Pages/NewArrival/NewArrival';
import Category from './Pages/Category/Category';
import Footer from './Components/Footer/Footer';
import ProductPage from './Components/ProductPage/ProductPage';





const App = () => {
  return (
    <div>
      {/* <Navbar/>
      <Homepage/>
      <NewArrival/>
      <Category/>
      <Footer/> */}
      <ProductPage/>
    </div>
  )
}

export default App

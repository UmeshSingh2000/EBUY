import React, { useEffect } from 'react'
import Homepage from './Pages/Hompage/Homepage'
import Navbar from './Components/Navbar/Navbar'
import NewArrival from './Pages/NewArrival/NewArrival';
import Category from './Pages/Category/Category';
import Footer from './Components/Footer/Footer';





const App = () => {
  return (
    <div>
      <Navbar/>
      <Homepage/>
      <NewArrival/>
      <Category/>
      <Footer/>
    </div>
  )
}

export default App

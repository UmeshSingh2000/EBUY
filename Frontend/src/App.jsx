import React, { useEffect } from 'react'
import Homepage from './Pages/Hompage/Homepage'
import Navbar from './Components/Navbar/Navbar'
import NewArrival from './Pages/NewArrival/NewArrival';
import Footer from './Components/Footer/Footer';
const App = () => {
  return (
    <div>
      <Navbar/>
      <Homepage/>
      <NewArrival/>
      <Footer/>
    </div>
  )
}

export default App

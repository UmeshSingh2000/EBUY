import React, { useEffect } from 'react'
import Homepage from './Pages/Hompage/Homepage'
import Navbar from './Components/Navbar/Navbar'
import NewArrival from './Pages/NewArrival/NewArrival';
import Footer from './Components/Footer/Footer';
import Sponsers from './Pages/Sponsers/Sponsers';
import Newsletter from './Components/NewsLetter/Newsletter';
const App = () => {
  return (
    <div>
      <Navbar/>
      <Homepage/>
      <NewArrival/>
      <Sponsers/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default App

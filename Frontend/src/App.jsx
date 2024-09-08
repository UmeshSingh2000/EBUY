import React, { useEffect } from 'react'
import Homepage from './Pages/Hompage/Homepage'
import Navbar from './Components/Navbar/Navbar'
import NewArrival from './Pages/NewArrival/NewArrival';
const App = () => {
  return (
    <div>
      <Navbar/>
      <Homepage/>
      <NewArrival/>

    </div>
  )
}

export default App

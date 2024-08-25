import React, { useEffect } from 'react'
import Homepage from './Pages/Hompage/Homepage'
import Navbar from './Components/Navbar/Navbar'
import LocomotiveScroll from 'locomotive-scroll';
import NewArrival from './Pages/NewArrival/NewArrival';
import HamburgerMenu from './Components/Menu/HamburgerMenu';
import Category from './Pages/Category/Category';
import Footer from './Components/Footer/Footer';




const App = () => {
  
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector('#root'),
      smooth: true
    });

    // Clean up
    return () => {
      scroll.destroy();
    };
  }, []);
  return (
    <div>
      
      <Navbar/>
      <HamburgerMenu/>
      <Homepage/>
      <NewArrival/>
      <Category/>
      <Footer/>
    </div>
  )
}

export default App

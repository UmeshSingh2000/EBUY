import React, { useEffect } from 'react'
import Homepage from './Pages/Hompage/Homepage'
import Navbar from './Components/Navbar/Navbar'
import LocomotiveScroll from 'locomotive-scroll';
import Dashboard from './Pages/Dashboard/Dashboard';


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
      {/* <Navbar/>
      <Homepage/> */}
      <Dashboard/>
    </div>
  )
}

export default App

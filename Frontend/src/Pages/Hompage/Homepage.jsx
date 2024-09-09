import React, { useEffect } from 'react'
const Homepage = () => {
  useEffect(() => {
    document.title = 'Ebuy || Buy Trending Cloths'
  }, [])
  return (
    <div className='homepage'>
      <div className="homepageContent">
        <div style={{
          display: 'flex',
        }} className='content'>
          <span className='text'>New</span><span className='text'>Mens</span> <span className='text'>Collections</span>
        </div>
        <button>View</button>
        <p>GET UP TO <span>70% OFF</span></p>
      </div>
    </div>
  )
}

export default Homepage

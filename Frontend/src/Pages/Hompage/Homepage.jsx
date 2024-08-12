
import React from 'react'
const Homepage = () => {
  return (
    <div className='homepage'>
      <div className="homepageContent">
        <div style={{
          display: 'flex',
        }}  className='content'>
          <span className='text'>New</span><span className='text'>Mens</span> <span className='text'>Collections</span>
        </div>
        <button>Shop Now</button>
        <p>GET UP TO <span>70% OFF</span></p>
      </div>
    </div>
  )
}

export default Homepage

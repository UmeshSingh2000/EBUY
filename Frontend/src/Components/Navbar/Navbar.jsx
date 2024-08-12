import React from 'react'
import search from '../../assets/icons8-search-64.png'
import bag from '../../assets/icons8-bag-50.png'
import user from '../../assets/icons8-user-50.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="topHeader">
        <marquee behavior="" direction="">Free 2-Day Shipping On Order of 1500</marquee>
      </div>
      <div className="mainNav">
        <div className="menu">
          <i className="fa-solid fa-bars"></i>
          <h3>Menu</h3>
        </div>
        <div className="logo">
          <h1>Ebuy</h1>
        </div>
        <div className="utils">
          <img src={search} alt="" />
          <img src={bag} alt="" />
          <Link to='/admin/Login'><img src={user} alt="" /></Link>
          {/* <i className="fa-brands fa-searchengin"></i>
          <i className="fa-solid fa-user"></i>
          <i className="fa-solid fa-bag-shopping"></i> */}
        </div>
      </div>
    </div>
  )
}

export default Navbar

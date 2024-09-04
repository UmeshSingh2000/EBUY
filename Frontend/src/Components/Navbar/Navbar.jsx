import React, { useEffect, useState } from 'react'
import search from '../../assets/icons8-search-64.png'
import bag from '../../assets/icons8-bag-50.png'
import user from '../../assets/icons8-user-50.png'
import HamburgerMenu from '../Menu/HamburgerMenu';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { menuClick } from '../../../Redux/features/menu/menuSlice'
import SearchPage from '../Search/SearchPage';

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <>
      <HamburgerMenu />
      <div className='navbar'>
        <div className="topHeader">
          <marquee behavior="" direction="">Free 2-Day Shipping On Order of 1500</marquee>
        </div>
        <div className="mainNav">
          <div className="menu" onClick={() => {
            dispatch(menuClick());
          }}>
            <i className="fa-solid fa-bars"></i>
            <h3>Menu</h3>
          </div>
          <div className="logo">
            <Link to='/' style={{ color: 'white', textDecoration: 'none' }}><h1>Ebuy</h1></Link>
          </div>
          <SearchPage />
          <div className="utils">
            <img src={search} alt=""/>
            <img src={bag} alt="" />
            <Link to='/admin/Login'><img src={user} alt="" /></Link>
            {/* <i className="fa-brands fa-searchengin"></i>
          <i className="fa-solid fa-user"></i>
          <i className="fa-solid fa-bag-shopping"></i> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar

import React, { useEffect, useState } from 'react'
import search from '../../assets/icons8-search-64.png'
import bag from '../../assets/icons8-bag-50.png'
import user from '../../assets/icons8-user-50.png'
import HamburgerMenu from '../Menu/HamburgerMenu';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { menuClick } from '../../../Redux/features/menu/menuSlice'
import SearchPage from '../Search/SearchPage';
import { Searchclick } from '../../../Redux/features/search/searchSlice';

const Navbar = () => {
  const menuStatus = useSelector((state) => state.menu.value)
  const searchStatus = useSelector((state) => state.search.value)

  const dispatch = useDispatch();
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.key === 'k') {
        e.preventDefault();
        if (menuStatus) {
          console.log("hello");
          
          dispatch(menuClick());
        }
        if (!searchStatus) {
          dispatch(Searchclick());
        }
        window.scrollTo(0, 0);
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    }
  }, [dispatch])
  return (
    <>
      <HamburgerMenu />
      <SearchPage />
      <div className='navbar'>
        <div className="topHeader">
          <marquee behavior="" direction="">Free 2-Day Shipping On Order of 1500</marquee>
        </div>
        <div className="mainNav">
          <div className="menu" onClick={() => {
            if (searchStatus) {
              dispatch(Searchclick()); 
            }
            dispatch(menuClick());
          }}>
            <i className="fa-solid fa-bars"></i>
            <h3>Menu</h3>
          </div>
          <div className="logo">
            <Link to='/' style={{ color: 'white', textDecoration: 'none' }}><h1>Ebuy</h1></Link>
          </div>
          <div className="utils">
            <img src={search} alt="" onClick={() => {
              if (menuStatus) {
                dispatch(menuClick()); 
              }
              dispatch(Searchclick());
            }} />
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

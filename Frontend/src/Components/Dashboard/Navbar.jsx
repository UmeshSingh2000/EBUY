import React from 'react'

const Navbar = () => {
    return (
        <div className='dashboard-Navbar'>
            <div className='hamburger'>
                <i className="fa-solid fa-bars"></i>
                <h1>Menu</h1>
            </div>
            <div className="button">
                <button className="btn">Logout</button>
            </div>
        </div>
    )
}

export default Navbar

import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
    const navigate = useNavigate();
    const handleLogout =()=>{
        localStorage.removeItem('jwtToken');
        navigate('/admin/Login');
    }
    useEffect(()=>{
        const tokenExist = localStorage.getItem('jwtToken')
        if(!tokenExist){
            navigate('/admin/Login');
        }
    },[navigate])
    
    return (
        <div className='dashboard-Navbar'>
            <div className='hamburger'>
                <i className="fa-solid fa-bars"></i>
                <h1>Menu</h1>
            </div>
            <div className="button">
                <button className="btn" onClick={handleLogout}>Logout</button>
            </div>
        </div>
    )
}

export default Navbar

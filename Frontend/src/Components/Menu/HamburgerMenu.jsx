import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';

const HamburgerMenu = () => {
    const menuStatus = useSelector((state) => state.menu.value)
    const hamburgerStyle = {
        top: menuStatus ? '0' : '-40%',
    }
    useEffect(() => {
        console.log(menuStatus);

    }, [menuStatus])

    return (
        <div className='hamburger_menu' style={hamburgerStyle}>
            <div className="content">
                <div className="bg">
                    <h1>Ebuy</h1>
                </div>
                <div className="left">
                    <ul>
                        <li>Men</li>
                        <li>Women</li>
                        <li>Kids</li>
                    </ul>
                </div>
                <div className="right"></div>
            </div>
        </div>
    )
}

export default HamburgerMenu

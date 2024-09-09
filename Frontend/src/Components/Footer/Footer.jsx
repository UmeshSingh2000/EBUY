import React from 'react'
import './style.css'
const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <div className="support">
                    <h1>Support</h1>
                    <ul>
                        <li>Contact us</li>
                        <li>Promotions & Sale</li>
                        <li>Track Order</li>
                        <li>Clothe Care</li>
                        <li>Tech Glossary</li>
                        <li>Initiate Return / Exchange</li>
                        <li>Cookie Settings</li>
                    </ul>
                </div>
                <div style={{ marginTop: '40px' }}>
                    <ul>
                        <li>FAQs</li>
                        <li>My Account</li>
                        <li>Exchange & Return Policy</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Condition</li>
                    </ul>
                </div>
                <div className="about">
                    <h1>About</h1>
                    <ul>
                        <li>Company</li>
                        <li>Corporate News</li>
                        <li>Press Center</li>
                        <li>Investors</li>
                        <li>Sustainability</li>
                        <li>Careers</li>
                        <li>Store Locator</li>
                        <li>Ebuy Article</li>
                    </ul>
                </div>
                <div className="links">
                    <h1>Connect</h1>
                    <div className="row">
                        <i className="fa-brands fa-x-twitter"></i>
                        <i className="fa-brands fa-youtube"></i>
                    </div>
                    <div className="row">
                        <i className="fa-brands fa-facebook"></i>
                        <i className="fa-brands fa-instagram"></i>
                    </div>
                    <div className="row">
                        <i className="fa-brands fa-pinterest"></i>
                    </div>
                </div>
            </div>
            <div className="line"></div>
            <div className="footerBase">

                <p>© Copyright 2024. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer

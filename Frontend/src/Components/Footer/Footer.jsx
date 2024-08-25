import React from 'react'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="top">
                <h1>Subscribe to our newsletter</h1>
                <form action="">
                    <input type="email" placeholder='email...' />
                    <button>Subscribe</button>
                </form>
            </div>
            <div className="bottom">
                <p>© 2024 www.Ebuy.com. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer

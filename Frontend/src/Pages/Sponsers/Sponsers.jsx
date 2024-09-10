import React from 'react'
import sp1 from '../../assets/3867050.png'
import sp2 from '../../assets/black-friday-concept-with-products-falling-into-cart.jpg'
import sp3 from '../../assets/front-view-smiley-woman-posing-with-shopping-bags-tags.jpg'
const Sponsers = () => {
    return (
        <div className='sponsers'>
            <h1>Exciting Deals</h1>
            <div className="top">
                <img src={sp1} alt="" />
            </div>
            <div className="bottom">
                <img src={sp2} alt="" />
                <img src={sp3} alt="" />
            </div>
        </div>
    )
}

export default Sponsers

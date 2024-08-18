import React from 'react'
import img1 from '../../assets/Hoddie.png'
import img2 from '../../assets/Tshirt.png'
import img3 from '../../assets/leather jacket.png'

const NewArrival = () => {
    return (
        <div className='newArrival'>
            <div className="heading">
                <h1>Featured Product</h1>
                <p>Explore the great variety of Cloths</p>
            </div>
            <div className="product">
                <div className="row">
                    <div className="image">
                        <img src={img1} alt="" />
                    </div>
                    <div className="description">
                        <h2>White pullover hoodie</h2>
                        <p>Loose Fit Hoddie</p>
                        <div className="price">
                            <h3>₹ 1200</h3>
                            <h3 style={{"textDecoration": "line-through",color:'gray'}}>₹ 5000 </h3>
                            <p>(76% OFF)</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="image">
                        <img src={img2} alt="" />
                    </div>
                    <div className="description">
                        <h2>Aero Armour</h2>
                        <p>Unisex Pure Cotton T-shirt</p>
                        <div className="price">
                            <h3>₹ 799 </h3>
                            <h3 style={{"textDecoration": "line-through",color:'gray'}}>₹ 1499</h3>
                            <p>(₹ 700 OFF)</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="image">
                        <img src={img3} alt="" />
                    </div>
                    <div className="description">
                        <h2>Blue button-up denim jacket</h2>
                        <p>Leather jacket</p>
                        <div className="price">
                            <h3>₹ 1200</h3>
                            <h3 style={{"textDecoration": "line-through",color:'gray'}}>₹ 5000 </h3>
                            <p>(76% OFF)</p>
                        </div>
                    </div>
                </div>            
            </div>
        </div>
    )
}

export default NewArrival

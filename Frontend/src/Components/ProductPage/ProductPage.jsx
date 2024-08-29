import React from 'react'
import img from '../../assets/b4376d2e-482d-403a-a48f-0b08e2fd681b1714722829820MASCLNSASSAFRASUnisexPrintedHoodedRawEdgeT-shirt1.jpg'
import Navbar from '../Navbar/Navbar'
const ProductPage = () => {
  return (
    <div className='productPage'>
      <Navbar />
      <div className="container">
        <div className="left">
          <img src={img} alt="" />
        </div>
        <div className="right">
          <div className="productName"><h1>MASCLN SASSAFRAS</h1></div>
          <div className="productDescription">
            <p>Unisex Blue Abstract Printed Drop-Shoulder Cotton Oversized T-shirt</p>
          </div>
          <div className="price">
            <h1>₹1139</h1>
            <h2>MRP ₹ <span>2999</span></h2>
            <h3>(62% OFF)</h3>
          </div>
          <p>Inclusive of all taxes</p>
          <div className="sizes">
            <input type="radio" id='xs'/>
            <label htmlFor="xs">Xs</label>
            <input type="radio" id='s'/>
            <label htmlFor="s">S</label>
            <input type="radio" id='m'/>
            <label htmlFor="m">M</label>
            <input type="radio" id='l'/>
            <label htmlFor="l">L</label>
          </div>
          <div className="buttons">
            <button className='addToCart'><i className="fa-solid fa-cart-shopping"></i>Add to Cart</button>
            <button><i className="fa-regular fa-heart"></i>Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPage

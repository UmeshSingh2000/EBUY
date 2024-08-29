import React from 'react'
import './style.css'
const ProductPageSidebar = () => {
    return (
        <div className="sidebar">
            <div className="categories">
                <h1>Category</h1>
                <div className="men">
                    <input type="radio" id='men' />
                    <label htmlFor="men">Men</label>
                </div>
                <div className="women">
                    <input type="radio" id='women' />
                    <label htmlFor="women">Women</label>
                </div>
                <div className="kids">
                    <input type="radio" id='kids' />
                    <label htmlFor="kids">Kids</label>
                </div>
            </div>
            <hr />
            <div className="price">
                <h1>Price</h1>
                <input type="range" min={0} max={10000} />
            </div>
            <hr />
            <div className="sizes">
                <h1>Size</h1>
                <div className="xs">
                    <input type="checkbox" id='xs' />
                    <label htmlFor="xs">Xs</label>
                </div>
                <div className="s">
                    <input type="checkbox" id='s' />
                    <label htmlFor="s">S</label>
                </div>
                <div className="m">
                    <input type="checkbox" id='m' />
                    <label htmlFor="m">M</label>
                </div>
                <div className="l">
                    <input type="checkbox" id='l' />
                    <label htmlFor="l">L</label>
                </div>
            </div>
        </div>
    )
}

export default ProductPageSidebar

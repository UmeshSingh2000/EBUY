import React, { useEffect } from 'react'
import './style.css'
import { Link } from 'react-router-dom';
const ProductCard = (props) => {
    const product = props.details;
    return (
        <Link to={`/product/${product._id}`} style={{color:'black',textDecoration:'none'}}>
            <div className='productCard'>
                <div className="image">
                    <img src={`data:${product.imageType};base64,${product.image}`} alt="img" />
                </div>
                <div className="description">
                    <h2>{product.productName}</h2>
                    <p>{`${product.productDescription.slice(0, 20)}...`}</p>
                    <div className="price">
                        <h3>₹ {product.price}</h3>
                        <h3 style={{ textDecoration: "line-through", color: 'gray' }}>
                            ₹ {product.price + product.discount}
                        </h3>
                        <p>({Math.round((product.discount / (product.price + product.discount)) * 100)}% OFF)</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ProductCard

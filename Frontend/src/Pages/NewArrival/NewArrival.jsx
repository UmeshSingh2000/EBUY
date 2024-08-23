import React, { useEffect, useState } from 'react'
import axios from 'axios'

const NewArrival = () => {
    const [topArrival, setTopArrival] = useState([])
    useEffect(() => {
        const fetchTopArrival = async () => {
            try {
                const response = await axios.get('http://localhost:3000/product/topArrival')
                setTopArrival(response.data);
            }
            catch (err) {
                console.log(err)
            }
        };
        fetchTopArrival()
    }, [])
    return (
        <div className='newArrival'>
            <div className="heading">
                <h1>Featured Product</h1>
                <p>Explore the great variety of Cloths</p>
            </div>
            <div className="product">
                {topArrival.map((product, index) => {
                    return (
                        <div className="row" key={index}>
                            <div className="image">
                                <img src={`data:${product.imageType};base64,${product.image}`} alt="hello" />
                            </div>
                            <div className="description">
                                <h2>{product.productName}</h2>
                                <p>{product.productDescription}</p>
                                <div className="price">
                                    <h3>₹ {product.price}</h3>
                                    <h3 style={{ textDecoration: "line-through", color: 'gray' }}>
                                        ₹ {product.price + product.discount}
                                    </h3>
                                    <p>({Math.round((product.discount / (product.price + product.discount)) * 100)}% OFF)</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default NewArrival

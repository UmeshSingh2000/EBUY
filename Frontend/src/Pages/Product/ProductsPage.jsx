import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import axios from 'axios'

const ProductsPage = () => {
    const [product, SetProduct] = useState([]);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get('http://localhost:3000/product/allProduct')
                SetProduct(response.data);
            }
            catch (err) {
                console.log(err);
            }
        }
        fetchProduct();
    }, [])
    return (
        <div className='productsPage'>
            <Navbar />
            <div className="mainContent">
                <div className="sidebar">
                    <div className="categories">
                        <h1>Category</h1>
                        <div className="men">
                            <input type="checkbox" id='men' />
                            <label htmlFor="men">Men</label>
                        </div>
                        <div className="women">
                            <input type="checkbox" id='women' />
                            <label htmlFor="women">Women</label>
                        </div>
                        <div className="kids">
                            <input type="checkbox" id='kids' />
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
                        <div className="sx">
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
                <div className="mainPage">
                    {product.map((prod, index) => {
                        return (
                            <div key={index} className='prodBox'>
                                <div className="image"><img src={`data:${prod.imageType};base64,${prod.image}`} alt="img" /></div>
                                <div className="prodInfo">
                                    <h1>{prod.productName}</h1>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default ProductsPage

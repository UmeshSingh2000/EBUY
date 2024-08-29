import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setTopProduct } from '../../../Redux/features/product/topproductSlice'

const NewArrival = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.topProduct.value)
    const [topArrival, setTopArrival] = useState([])
    useEffect(() => {
        if(data.length!=0){
            return setTopArrival(data)
        }
        const fetchTopArrival = async () => {
            try {
                const response = await axios.get('http://localhost:3000/product/topArrival')
                const fetchData = response.data
                dispatch(setTopProduct(fetchData))
                setTopArrival(fetchData);
            }
            catch (err) {
                console.log(err)
            }
        };
        fetchTopArrival()
    }, [dispatch,data])
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
                                <img src={`data:${product.imageType};base64,${product.image}`} alt="img" />
                            </div>
                            <div className="description">
                                <h2>{product.productName}</h2>
                                <p>{`${product.productDescription.slice(0, 25)}...`}</p>
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
            <div className="btn">
                <Link to='/allProduct'><button>All Product</button></Link>
            </div>
        </div>
    )
}

export default NewArrival

import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from '../../Components/Product Card/ProductCard'
import { Link, useParams } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'
import { setAllProduct } from '../../../Redux/features/product/allproductSlice';
import axios from 'axios'
import Loader from '../../Components/Loader/Loader'
const Mens = () => {
    const { category } = useParams();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const data = useSelector((state) => state.allProduct.value) // all product
    const [filteredProducts, setFilteredProducts] = useState([]);
    //filter according to category
    useEffect(() => {
        if (data.length > 0) return
        const fetchProduct = async () => {
            setLoading(true);
            try {
                const response = await axios.get('http://localhost:3000/product/allProduct')
                const fetchData = response.data;
                dispatch(setAllProduct(fetchData))
            }
            catch (err) {
                console.log(err);
            }
            finally {
                setLoading(false);
            }
        }
        fetchProduct();
    }, [dispatch, data])
    useEffect(() => {
        const filterProduct = () => {
            let filtered = [];
            if (category === 'mens') {
                filtered = data.filter((prod) => prod.gender === 'Male');
            } else if (category === 'women') {
                filtered = data.filter((prod) => prod.gender === 'Female');
            } else if (category === 'kids') {
                filtered = data.filter((prod) => prod.gender === 'Kids');
            }
            setFilteredProducts(filtered);
        }
        if (data.length > 0) filterProduct()
    }, [category, data])
    if (loading) return <Loader />
    return (
        <div className='mens'>
            <Navbar />
            <p className='path'>HOME&gt;{category.toUpperCase()}</p>
            <div className="container">
                {filteredProducts.map((prod, index) => {
                    return (
                        <div key={index}>
                            <ProductCard details={prod} />
                        </div>
                    )
                })}
            </div>
            <Footer />
        </div>
    )
}

export default Mens

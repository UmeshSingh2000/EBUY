import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import axios from 'axios'
import ProductCard from '../../Components/Product Card/ProductCard';
import ProductPageSidebar from '../../Components/Sidebar/ProductPageSidebar';
import { useDispatch, useSelector } from 'react-redux';
import { setAllProduct } from '../../../Redux/features/product/allproductSlice';
import Loader from '../../Components/Loader/Loader';
const AllProductsPage = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const data = useSelector((state) => state.allProduct.value)
    const [product, SetProduct] = useState([]);
    useEffect(() => {
        if (data.length != 0) return SetProduct(data);
        const fetchProduct = async () => {
            setLoading(true);
            try {
                const response = await axios.get('http://localhost:3000/product/allProduct')
                const fetchData = response.data;
                dispatch(setAllProduct(fetchData))
                SetProduct(fetchData);
            }
            catch (err) {
                console.log(err);
            }
            finally {
                setLoading(false);
            }
        }
        fetchProduct();
    }, [dispatch])
    return (
        <div className='productsPage'>
            <Navbar />
            <div className="mainContent">
                <ProductPageSidebar />
                {loading ? (
                    <Loader />
                ) : (
                    <div className="mainPage">
                        {product.map((prod, index) => {
                            return (
                                <div key={index} className="product">
                                    <ProductCard details={prod} />
                                </div>
                            )
                        })}
                    </div>
                )}
            </div>
        </div>
    )
}

export default AllProductsPage

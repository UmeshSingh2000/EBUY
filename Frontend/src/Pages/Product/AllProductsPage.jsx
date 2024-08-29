import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import axios from 'axios'
import ProductCard from '../../Components/Product Card/ProductCard';
import ProductPageSidebar from '../../Components/Sidebar/ProductPageSidebar';
const AllProductsPage = () => {
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
                <ProductPageSidebar/>
                <div className="mainPage">
                    {product.map((prod, index) => {
                        return (
                            <div key={index} className="product">
                                <ProductCard details={prod} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default AllProductsPage

import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../../Components/Product Card/ProductCard';
import axios from 'axios';
import { setAllProduct } from '../../../Redux/features/product/allproductSlice';
import Loader from '../../Components/Loader/Loader';
const SearchPageResult = () => {
    const data = useSelector((state) => state.allProduct.value)
    const location = useLocation();
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch();
    const getQueryParam = () => {
        const query = new URLSearchParams(location.search);
        return query.get('q');
    }
    const searchTerm = getQueryParam();
    const [filterOnSearch, setFilterOnSearch] = useState([]);
    useEffect(() => {
        if (data.length != 0) {
            const filteredData = data.filter((item) =>
                (item.tags.toLowerCase() === searchTerm.toLowerCase()) || (item.productName.toLowerCase() === searchTerm.toLowerCase())
            );
            return setFilterOnSearch(filteredData);
        }
        const fetchProd = async () => {
            setLoading(true)
            try {
                const response = await axios.get('http://localhost:3000/product/allProduct')
                const fetchData = response.data;
                dispatch(setAllProduct(fetchData));
            }
            catch (err) {
                console.log(err);
            }
            finally {
                setLoading(false)
            }
        }
        fetchProd();
    }, [searchTerm, data, dispatch])
    return (
        <div className='searchPageResult'>
            <Navbar />
            <h1>Search Results for {searchTerm}</h1>
            {loading ? <Loader/> : <div>
                {filterOnSearch.length > 0 ? (
                    <div className='container'>
                        {filterOnSearch.map((prod, index) => {
                            return (
                                <div key={index}>
                                    <ProductCard details={prod} />
                                </div>
                            )
                        })}
                    </div>
                ) : (
                    <p>No products found matching "{searchTerm}".</p>
                )}
            </div>}

        </div>
    )
}

export default SearchPageResult

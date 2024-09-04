import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar';
import { useSelector } from 'react-redux';
import ProductCard from '../../Components/Product Card/ProductCard';
const SearchPageResult = () => {
    const data = useSelector((state) => state.allProduct.value)
    const location = useLocation();
    const getQueryParam = () => {
        const query = new URLSearchParams(location.search);
        return query.get('q');
    }
    const searchTerm = getQueryParam();
    const [filterOnSearch, setFilterOnSearch] = useState([]);
    useEffect(() => {

        const filteredData = data.filter((item) =>
            (item.tags.toLowerCase() === searchTerm.toLowerCase()) || (item.productName.toLowerCase() === searchTerm.toLowerCase())
        );
        setFilterOnSearch(filteredData);

    }, [searchTerm, data])
    return (
        <div className='searchPageResult'>
            <Navbar />
            <h1>Search Results for {searchTerm}</h1>
            {filterOnSearch.length > 0 ? (
                <div className='container'>
                    {filterOnSearch.map((prod,index) => {
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
        </div>
    )
}

export default SearchPageResult

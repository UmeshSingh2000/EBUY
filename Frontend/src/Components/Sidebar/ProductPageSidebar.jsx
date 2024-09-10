import React, { useEffect, useState } from 'react'
import './style.css'
import { useDispatch, useSelector } from 'react-redux';
import { filterByCategory, filterByPrice, filterBySize, resetFilter } from '../../../Redux/features/SortProduct/sortProductSlice';
const ProductPageSidebar = () => {
    const data = useSelector((state) => state.filterCategory)
    const dispatch = useDispatch();
    const handleCategory = (val) => {
        dispatch(filterByCategory(val))
    }
    return (
        <div className="sidebar">
            <div className="categories">
                <h1>Category</h1>
                <div className="men">
                    <input type="radio" id='men' checked={data.men} onChange={() => handleCategory('men')} />
                    <label htmlFor="men">Men</label>
                </div>
                <div className="women">
                    <input type="radio" id='women' checked={data.women} onChange={() => handleCategory('women')} />
                    <label htmlFor="women">Women</label>
                </div>
                <div className="kids">
                    <input type="radio" id='kids' checked={data.kids} onChange={() => handleCategory('kids')} />
                    <label htmlFor="kids">Kids</label>
                </div>
            </div>
            <hr />
            <div className="price">
                <h1>Price</h1>
                <div className="range">
                    <input type="radio" name='price' onClick={()=> dispatch(filterByPrice('100-500'))}/>
                    <label htmlFor="">₹100 - ₹500</label>
                </div>
                <div className="range">
                    <input type="radio" name='price' onClick={()=> dispatch(filterByPrice('500-1000'))}/>
                    <label htmlFor="">₹500 - ₹1000</label>
                </div>
                <div className="range">
                    <input type="radio" name='price' onClick={()=> dispatch(filterByPrice('1000-1500'))}/>
                    <label htmlFor="">₹1000 - ₹1500</label>
                </div>
                <div className="range">
                    <input type="radio" name='price' onClick={()=> dispatch(filterByPrice('1500-2000'))}/>
                    <label htmlFor="">₹1500 - ₹2000</label>
                </div>
                <div className="range">
                    <input type="radio" name='price' onClick={()=> dispatch(filterByPrice('2000-2500'))}/>
                    <label htmlFor="">₹2000 - ₹2500</label>
                </div>
                <div className="range">
                    <input type="radio" name='price' onClick={()=> dispatch(filterByPrice('2500-3000'))}/>
                    <label htmlFor="">₹2500 - ₹3000</label>
                </div>
                <div className="range">
                    <input type="radio" name='price' onClick={()=> dispatch(filterByPrice('>3000'))}/>
                    <label htmlFor="">&gt; ₹3000</label>
                </div>
            </div>
            <hr />
            <div className="sizes">
                <h1>Size</h1>
                <div className="xs">
                    <input type="checkbox" id='xs' onClick={() => dispatch(filterBySize('Xs'))} />
                    <label htmlFor="xs">Xs</label>
                </div>
                <div className="s">
                    <input type="checkbox" id='s' onClick={() => dispatch(filterBySize('S'))} />
                    <label htmlFor="s">S</label>
                </div>
                <div className="m">
                    <input type="checkbox" id='m' onClick={() => dispatch(filterBySize('M'))} />
                    <label htmlFor="m">M</label>
                </div>
                <div className="l">
                    <input type="checkbox" id='l' onClick={() => dispatch(filterBySize('L'))} />
                    <label htmlFor="l">L</label>
                </div>
            </div>
            <button className='clearFilter' onClick={() => dispatch(resetFilter())}>Clear <i className="fa-solid fa-xmark"></i></button>
        </div>
    )
}
export default ProductPageSidebar

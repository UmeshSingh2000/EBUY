import React, { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
// import { Searchclick } from '../../../Redux/features/search/searchSlice';

const SearchPage = () => {
    const [search,setSearch]=useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const searchStatus = useSelector((state) => state.search.value)
    useEffect(() => {
        const handleSearch=(e)=>{
            if(e.key==='Enter' && search.trim()){
                navigate(`/search?q=${encodeURIComponent(search)}`);
                dispatch(Searchclick())
            }
        }
        window.addEventListener('keydown',handleSearch)

        return()=>{
            window.removeEventListener('keydown',handleSearch)
        }
    },[search,navigate])
    return (
        <div className='searchPage'>
            <div className="container">
                <input type="text" placeholder='search' onChange={(e)=> setSearch(e.target.value)}/>
            </div>
        </div>
    )
}

export default SearchPage

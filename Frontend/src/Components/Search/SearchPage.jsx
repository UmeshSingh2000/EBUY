import React, { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { Searchclick } from '../../../Redux/features/search/searchSlice';

const SearchPage = () => {
    const [search,setSearch]=useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const searchStatus = useSelector((state) => state.search.value)
    const searchPageStyle = {
        top: searchStatus ? '0' : '-100%'
    }
    useEffect(() => {
        const handleSearch=(e)=>{
            if(e.key==='Enter' && searchStatus && search.trim()){
                navigate(`/search?q=${encodeURIComponent(search)}`);
                dispatch(Searchclick())
            }
        }
        window.addEventListener('keydown',handleSearch)

        return()=>{
            window.removeEventListener('keydown',handleSearch)
        }
    },[searchStatus,search,navigate])
    return (
        <div className='searchPage' style={searchPageStyle}>
            <div className="container">
                <input type="text" placeholder='search' onChange={(e)=> setSearch(e.target.value)}/>
            </div>
            
        </div>
    )
}

export default SearchPage

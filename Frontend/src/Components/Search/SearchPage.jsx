import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';


const SearchPage = (props) => {
    const searchClick = props.search
    const [search, setSearch] = useState('');
    // const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        if (searchClick) {
            navigate(`/search?q=${encodeURIComponent(search)}`);
            return ;
        }
        const handleSearch = (e) => {
            if (e.key === 'Enter' && search.trim()) {
                navigate(`/search?q=${encodeURIComponent(search)}`);
            }
        }
        window.addEventListener('keydown', handleSearch)
        return () => {
            window.removeEventListener('keydown', handleSearch)
        }
    }, [search, navigate,searchClick])
    return (
        <div className='searchPage'>
            <div className="container">
                <input type="text" placeholder='search' onChange={(e) => setSearch(e.target.value)} />
            </div>
        </div>
    )
}

export default SearchPage

import React from 'react'
import men from '../../assets/majid-akbari-6x8uifBQ7As-unsplash.jpg'
import women from '../../assets/lance-reis-FPYq6DDI1gA-unsplash.jpg'
import kid from '../../assets/Kids category.jpg'

const Category = () => {
    return (
        <div className='category'>
            <div className="top-container">
                <div className="top-left">
                    <div className="content">
                        <h1>Mens</h1>
                        <button>Shop Now</button>
                    </div>
                    <img src={men} alt="men" />
                </div>
                <div className="top-right">
                    <div className="content">
                        <h1>Women</h1>
                        <button>Shop Now</button>
                    </div>
                    <img src={women} alt="men" />
                </div>
            </div>
            <div className="bottom-container">
                <div className="container">
                <div className="content">
                    <h1>Kids</h1>
                    <button>Shop Now</button>
                </div>
                    <img src={kid} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Category

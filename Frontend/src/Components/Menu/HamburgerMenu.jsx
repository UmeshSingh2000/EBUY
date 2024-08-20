import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import img1 from '../../assets/majid-akbari-6x8uifBQ7As-unsplash.jpg'
import img2 from '../../assets/lance-reis-FPYq6DDI1gA-unsplash.jpg'
import img3 from '../../assets/my-networking-apparel-54VE0-oytqo-unsplash.jpg'

const HamburgerMenu = () => {
    const menuStatus = useSelector((state) => state.menu.value)
    const [currentImage,setCurrentImage] = useState(null)
    const [imageTransform, setImageTransform] = useState({ x: 0, y: 0 });
    const hamburgerStyle = {
        top: menuStatus ? '0' : '-40%',
    }
    const menuItems = useRef([])
    const imageRef = useRef()
    
    useEffect(()=>{
        menuItems.current.forEach((li,index) => {
            li.addEventListener('mouseover', () => {
                setCurrentImage(imageArray[index]);
            })
            li.addEventListener('mousemove', (e) => {
                const rect = li.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width; 
                const y = (e.clientY - rect.top) / rect.height; 
                const offsetX = (x - 0.5) * 100; 
                const offsetY = (y - 0.5) * 100; 
                setImageTransform({ x: offsetX, y: offsetY });
            });
            li.addEventListener('mouseleave', () => {
                setCurrentImage(null);
                setImageTransform({ x: 0, y: 0 });
            })
        })
    },[])
    const imageArray = [img1,img2,img3]
    return (
        <div className='hamburger_menu' style={hamburgerStyle}>
            <div className="content">
                <div className="bg">
                    <h1>Ebuy</h1>
                </div>
                <div className="left">
                    <ul>
                        <li ref={(el) => (menuItems.current[0] = el)}>Men</li>
                        <li ref={(el) => (menuItems.current[1] = el)}>Women</li>
                        <li ref={(el) => (menuItems.current[2] = el)}>Kids</li>
                    </ul>
                    {currentImage && <div className='image'>
                        <img src={currentImage} ref={imageRef} alt="" style={{
                                transform: `translate(${imageTransform.x}px, ${imageTransform.y}px)`,
                                transition: 'transform 0.1s ease',
                            }}/>
                    </div>}
                </div>
                <div className="right"></div>
            </div>
        </div>
    )
}

export default HamburgerMenu

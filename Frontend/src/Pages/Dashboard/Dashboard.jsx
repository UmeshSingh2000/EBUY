import React, { useRef, useState } from 'react'
import Navbar from '../../Components/Dashboard/Navbar'
import axios from 'axios';

const Dashboard = () => {
    const [imagePreview, setImagePreview] = useState(null);
    const [productName, setProductName] = useState('')
    const [productDescription, setProductDescription] = useState('')
    const [price, setPrice] = useState('')
    const [discount, setDiscount] = useState('')
    const [gender, setGender] = useState('')
    const [imageFile, setImageFile] = useState(null);





    const imageUploadRef = useRef(null);
    const [checkBoxs, setCheckBoxs] = useState([
        {
            checked: false,
            label: "Xs"
        },
        {
            checked: false,
            label: "S"
        },
        {
            checked: false,
            label: "M"
        },
        {
            checked: false,
            label: "L"
        }
    ]);
    const handleCheckBoxChange = (index) => {
        const updatedCheckboxes = [...checkBoxs];
        updatedCheckboxes[index].checked = !updatedCheckboxes[index].checked;
        setCheckBoxs(updatedCheckboxes);
    }

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            setImageFile(file)
            const reader = new FileReader();
            reader.onload = function (e) {
                setImagePreview(e.target.result);
            };
            reader.readAsDataURL(file);
        } else {
            setImagePreview(null);
            setImageFile(null)

        }
    };
    const handleProductAdd = async () => {
        const formData = new FormData()
        formData.append('productName', productName);
        formData.append('productDescription', productDescription);
        formData.append('price', price);
        formData.append('discount', discount);
        formData.append('gender', gender);
        formData.append('image', imageFile);
        const selectedSize = checkBoxs.filter(checkbox => checkbox.checked).map(checkbox => checkbox.label)
        formData.append('sizes',selectedSize)
        
        try{
            const response = await axios.post('http://localhost:3000/addProduct/newProduct',formData)
            alert('Product added Successfully',response.data)
        }
        catch(err){
            const message = err.response.data.message
            alert(message)
        }
    }
    return (
        <div className='dashboard'>
            <Navbar />
            <div className='dashboard-content'>
                <h1 className='content-heading'>Add New Product</h1>
                <div className="dashboard-content-container">
                    <div className="left">
                        <h1>General Information</h1>
                        <div className="box">
                            <input type="text" placeholder='Product Name' value={productName} onChange={(e) => setProductName(e.target.value)}/>
                            <textarea placeholder='Product Description' value={productDescription} onChange={(e) => setProductDescription(e.target.value)}></textarea>
                        </div>
                        <div className="product-stats">
                            <div className="gender">
                                <h1>Gender</h1>
                                <select name="" id="" value={gender} onChange={(e) => setGender(e.target.value)}>
                                    <option value="Select">Select</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>
                            <div className="size">
                                <h1>Size</h1>
                                {checkBoxs.map((checkbox, index) => {
                                    return <label key={index}>
                                        <input type="checkbox" name="size" checked={checkbox.checked} onChange={() => handleCheckBoxChange(index)} />
                                        {checkbox.label}
                                    </label>
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <h1>Product Image</h1>
                        <div className="box">
                            <div className="box_left_section">
                                <input type="file" accept='image/*' id='imageUpload' ref={imageUploadRef} onChange={handleImageUpload} />
                            </div>
                            <div className="box_right_section">
                                {imagePreview ? (
                                    <img src={imagePreview} alt="Image Preview" id='imagePreview' />
                                ) : (
                                    <p>No image selected</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="priceDetails">
                    <div className='container'>
                        <div className="price">
                            <input type="text" placeholder='Price' value={price} onChange={(e) => setPrice(e.target.value)} />
                        </div>
                        <div className="discount">
                            <input type="text" placeholder='Discount' value={discount} onChange={(e) => setDiscount(e.target.value)} />
                        </div>
                    </div>
                    <button onClick={handleProductAdd}>Add product</button>
                </div>
            </div>
        </div>
    )
}

export default Dashboard

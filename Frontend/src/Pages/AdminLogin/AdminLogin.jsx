import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AdminLogin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();
    const handleFormSubmission = async (e) => {
        e.preventDefault();
        setError('')
        setSuccess('')
        if (password !== confirmPassword) {
            return setError('Passwords do not match');
        }
        try {
            const response =await axios.post('http://localhost:3000/admin/login', { email, password });
            setSuccess('Login Sucess');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
            const token = response.data.token;
            localStorage.setItem('jwtToken',token) 
            navigate('/dashboard')
        }
        catch (err) {
            setError(err.response?.data || 'Error logging in');
        }
    }
    useEffect(()=>{
        const tokenExist = localStorage.getItem('jwtToken')
        if(tokenExist){
            navigate('/dashboard');
        }
    },[navigate])
    return (
        <div className='admin-login'>
            <div className="container">
                <h1>Admin</h1>
                <form onSubmit={handleFormSubmission}>
                    <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} value={email} required />
                    <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} value={password} required />
                    <input type="password" placeholder='Confirm Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                    {error && <div>
                        <p style={{ color: 'red', fontSize: '1.5vw', fontFamily: '"Montserrat", sans-serif' }}>{error}</p>
                    </div>}
                    {success && <p style={{ color: 'green', fontSize: '1.5vw', fontFamily: '"Montserrat", sans-serif' }}>{success}</p>}
                    <div className="button">
                        <p>Forget Password?</p>
                        <button type='submit'>Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AdminLogin

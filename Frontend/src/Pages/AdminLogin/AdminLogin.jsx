import React, { useState } from 'react'
import axios from 'axios'

const AdminLogin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const handleFormSubmission = async (e) => {
        e.preventDefault();
        setError('')
        if (password !== confirmPassword) {
            return setError('Passwords do not match');
        }
        try {
            const response = await axios.post('http://localhost:3000/admin/login', { email, password });
            setError(response.data);
            setEmail('');
            setPassword('');
            setConfirmPassword('');

        }
        catch (err) {
            setError(err.response?.data || 'Error logging in');
        }
    }
    return (
        <div className='admin-login'>
            <div className="container">
                <h1>Admin</h1>
                <form onSubmit={handleFormSubmission}>
                    <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} value={email} required/>
                    <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} value={password} required/>
                    <input type="password" placeholder='Confirm Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required/>
                    {error && <div>

                        <p style={{ color: 'red', fontSize: '1.5vw', fontFamily: '"Montserrat", sans-serif' }}>{error}</p>
                    </div>}
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

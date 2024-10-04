import React from 'react'
import './form.css';
import { FaUser, FaLock } from "react-icons/fa";

export const LoginForm = ({registerLink, setLoggedIn}) => {

    return (
        <div className="form-box login">
            <form onSubmit={() => setLoggedIn(true)}>
                <h1>Login</h1>
                <div className='input-box'>
                    <input type="text" placeholder='Username' required />
                    <FaUser className='icon'/>
                </div>
                <div className='input-box'>
                    <input type="password" placeholder='Password' required />
                    <FaLock className='icon'/>
                </div>
                <div className='remember-forget'>
                    <label><input type="checkbox"/>Remember me</label>
                    <a href="#">Forgot password?</a>
                </div>
                <button type='submit'>Login</button>
                <div className='register-link'>
                    <p>Don't have an account? <a href="#" onClick={registerLink}>Register</a></p>
                </div>
            </form>
        </div>
    );
}
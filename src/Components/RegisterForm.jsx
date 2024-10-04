import React, { useRef } from 'react';
import './form.css';
import { FaUser, FaLock } from "react-icons/fa";
import { Outlet, Link } from 'react-router-dom';


export const RegisterForm = ({loginLink}) => {
    const btnRef = useRef(null);
    const clickIt = () => btnRef.current.click();

    return (
        <div className="form-box register">
            <form action="">
                <h1>Register</h1>
                <div className='input-box'>
                    <input type="text" placeholder='Username' required />
                    <FaUser className='icon'/>
                </div>
                <div className='input-box'>
                    <input type="password" placeholder='Password' required />
                    <FaLock className='icon'/>
                </div>
                <div className='input-box'>
                    <input type="password" placeholder='Retype Password' required />
                    <FaLock className='icon'/>
                </div>

                <button type='submit' ref={btnRef}>Register</button>

                <div className='register-link'>
                    <p>Already have an account? <a href='#' onClick={loginLink}>Login</a></p>
                </div>
            </form>
        </div>
    )
}
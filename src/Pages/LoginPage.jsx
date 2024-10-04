import React, { useState } from 'react';
import './loginPage.css';
import { LoginForm } from '../Components/LoginForm.jsx';
import { RegisterForm } from '../Components/RegisterForm.jsx';
import { Navigate } from 'react-router-dom';

const LoginPage = () => {
    const [state, setState] = useState(" ");
    const [isLoggedIn, setLoggedIn] = useState(false);
    const registerLink = () => {
        setState(" active");
    }

    const loginLink = () => {
        setState(" ");
    }

    if(isLoggedIn)
        return(<Navigate to="/home"/>);
    else
        return (
            <div className='body'>
                <div className={`wrapper${state}`}>
                    <LoginForm
                        registerLink={registerLink}
                        setLoggedIn={setLoggedIn}
                    />
                    <RegisterForm loginLink={loginLink}/>
                </div>
            </div>
            
        )
}

export default LoginPage;
import React, { useState } from 'react'
import AuthForm from '../Components/AuthForm';
import { loginAPI } from '../Services/APIServices';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate=useNavigate();

    const handleFieldChange = (fieldName, value) => {
        if (fieldName === 'Email') {
            setEmail(value);
        } else if (fieldName === 'Password') {
            setPassword(value);
        }
    };

    const formFields = [
        { label: 'Email', type: 'email', value: email },
        { label: 'Password', type: 'password', value: password }
    ];

    const handleLogin =async (e) => {
        e.preventDefault();
        try {
            const userData = {
                email: email, 
                password: password
            };
            //const response = await loginAPI(userData);
            console.log(userData);
            setEmail('');
            setPassword('');
            localStorage.setItem('token','Hello');
            setTimeout(() => {
                localStorage.removeItem('token');
              }, 30*60*1000);
              navigate('/signup');

        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className='mt-5'>
            <AuthForm formType='loginForm' formFields={formFields} title='Login' onChange={handleFieldChange} handleLogin={handleLogin}/>
        </div>
    )
}

export default Login;

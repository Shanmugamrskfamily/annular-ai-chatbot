import React, { useState } from 'react'
import AuthForm from '../Components/AuthForm';
import { loginAPI } from '../Services/APIServices';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const navigate=useNavigate();

    const handleFieldChange = (fieldName, value) => {
        if (fieldName === 'Username') {
            setUserName(value);
        } else if (fieldName === 'Password') {
            setPassword(value);
        }
    };

    const formFields = [
        { label: 'Username', type: 'text', value: username },
        { label: 'Password', type: 'password', value: password }
    ];

    const handleLogin =async (e) => {
        e.preventDefault();
        try {
            const userData = {
                username: username, 
                password: password
            };
            //const response = await loginAPI(userData);
            console.log(userData);
            setUserName('');
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

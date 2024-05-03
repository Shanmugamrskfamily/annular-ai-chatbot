import React, { useEffect, useState } from 'react';
import AuthForm from '../Components/AuthComponents/AuthForm';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Signup() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate=useNavigate();

    useEffect(()=>{
        let token=localStorage.getItem('token');
        if(token){
            navigate('/talk-ease');
        }
    },[]);

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            // You can perform validation here before making the signup API call
            const userData = {
                username:username,
                password: password,
                // Add other fields as needed
            };
            // Call signup API function
            console.log(userData);
            // Clear form inputs after successful signup
            setUsername('');
            setPassword('');
            toast.success('Signup Success! Please login to continue..');
            navigate('/login');
        } catch (error) {
            console.error(error);
        }
    }

    const handleFieldChange = (fieldName, value) => {
        if (fieldName ==='New Username') {
            setUsername(value);
        }
        else if (fieldName ==='New Password') {
            setPassword(value);
        } 
    };

    const formFields = [
        { label: 'New Username', type: 'text', value: username},
        { label: 'New Password', type: 'password', value: password }
    ];

    return (
        <div className='mt-5'>
            <AuthForm 
                formType='signupForm' 
                formFields={formFields} 
                onChange={handleFieldChange} 
                handleSignup={handleSignup}
                title="Sign Up" 
            />
        </div>
    );
}

export default Signup;

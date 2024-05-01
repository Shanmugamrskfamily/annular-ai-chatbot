import React, { useState } from 'react';
import AuthForm from '../Components/AuthForm';

function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            // You can perform validation here before making the signup API call
            const userData = {
                name:name,
                email: email,
                password: password,
                confirmPassword:confirmPassword
                // Add other fields as needed
            };
            // Call signup API function
            console.log(userData);
            // Clear form inputs after successful signup
            setName('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
        } catch (error) {
            console.error(error);
        }
    }

    const handleFieldChange = (fieldName, value) => {
        if (fieldName === 'Email') {
            setEmail(value);
        } else if (fieldName === 'Password') {
            setPassword(value);
        } else if (fieldName === 'ConfirmPassword') {
            setConfirmPassword(value);
        }
        else if (fieldName === 'Name') {
            setName(value);
        }
    };

    const formFields = [
        { label: 'Name', type: 'text', value: name },
        { label: 'Email', type: 'email', value: email },
        { label: 'Password', type: 'password', value: password },
        { label: 'ConfirmPassword', type: 'password', value: confirmPassword }
    ];

    return (
        <div>
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

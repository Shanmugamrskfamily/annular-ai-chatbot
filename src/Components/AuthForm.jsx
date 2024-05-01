import React from 'react';

function AuthForm(props) {

    return (
        <form className="mx-auto max-w-sm" action={props.formType} onSubmit={props.formType==='loginForm'? props.handleLogin:props.handleSignup}>
            <h1 className="text-xl font-bold mb-4">{props.title}</h1>
            {props.formFields.map(({ label, type, value }) => (
                <div key={label} className="mb-4">
                    <label htmlFor={label} className="block mb-1">{label}</label>
                    <input 
                        type={type} 
                        name={label} 
                        id={label} 
                        value={value}
                        onChange={(e) => props.onChange(label, e.target.value)}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>
            ))}
            <div>
                <button
                    type='submit' 
                    className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                >
                    {props.formType === 'loginForm' ? 'Login' : 'Signup'}
                </button>
            </div>
        </form>
    );
}

export default AuthForm;

import React from 'react';
import { Link } from 'react-router-dom';

function PageNotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
            <p className="text-lg">The page you are looking for does not exist</p>
            <p className='text-2xl'>(OR)</p>
            <p className='text-red-600 mb-8'>Your Not Authoraized!</p>
            <Link to="/login" className="text-blue-500 hover:underline">Go to Login Page</Link>
        </div>
    );
}

export default PageNotFound;

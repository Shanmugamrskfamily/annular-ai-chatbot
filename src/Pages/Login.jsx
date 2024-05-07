
import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {
    const validationSchema = Yup.object({
        usernameOrEmail: Yup.string().required('Username or Email is required'),
        password: Yup.string().required('Password is required')
    });
    const navigate=useNavigate();

    useEffect(()=>{
        let token=localStorage.getItem('token');
        if(token){
            navigate('/talk-ease')
        }
    },[]);

    const formik = useFormik({
        initialValues: {
            usernameOrEmail: '',
            password: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            // Handle login logic here
            console.log('Login form submitted with values:', values);
            localStorage.setItem('token','Hello');
            localStorage.setItem('userRole','admin');
            setTimeout(() => {
                localStorage.removeItem('token');
              }, 30*60*1000);
              toast.success('Login Success!');
              navigate('/pending-aprovals');
        }
    });

    return (
        <div className="min-h-screen flex justify-center items-center">
            <form className="max-w-md signupForm w-full bg-white p-8 rounded border-2 shadow-lg" onSubmit={formik.handleSubmit}>
                <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
                <div className="mb-4">
                    <label htmlFor="usernameOrEmail" className="block text-gray-700 font-bold mb-2">Username or Email</label>
                    <input type="text" id="usernameOrEmail" className="form-input w-full" {...formik.getFieldProps('usernameOrEmail')} />
                    {formik.touched.usernameOrEmail && formik.errors.usernameOrEmail ? (
                        <div className="text-red-500 text-sm">{formik.errors.usernameOrEmail}</div>
                    ) : null}
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
                    <input type="password" id="password" className="form-input w-full" {...formik.getFieldProps('password')} />
                    {formik.touched.password && formik.errors.password ? (
                        <div className="text-red-500 text-sm">{formik.errors.password}</div>
                    ) : null}
                </div>
                <div className="flex-col justify-between items-center text-center">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold mb-3 py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Login
                    </button>
                    <p className="text-sm">Don't have an account? <Link to={'/signup'} className="text-blue-500 underline">Signup</Link></p>
                </div>
            </form>
        </div>
    );
}

export default Login;

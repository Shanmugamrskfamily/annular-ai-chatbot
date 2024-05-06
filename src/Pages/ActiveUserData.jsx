import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../Redux/Slicers/AdminSlice';
import { Sidebar } from '../Components/UserComponents/Sidebar';
import { XCircleIcon } from "@heroicons/react/24/solid";
import { Link, useLocation } from 'react-router-dom';

function ActiveUserData() {
    const activeUsersData = useSelector(state => state.adminControlls.activeUsersData);
    const dispatch = useDispatch();
    let location=useLocation();
    
    useEffect(() => {
        const userRole = localStorage.getItem('userRole');
        dispatch(getUsers(userRole));
    }, [dispatch]);
    
    return (
        <div className='flex'>
            <Sidebar/>
        <div className="flex-1 mt-12 ml-4 overflow-x-auto">
        <div className='flex mb-5'>
            <Link
                className={`text-blue-600 hover:underline mr-5 hover:text-blue-800 ${location.pathname === '/pending-aprovals' ? 'font-bold underline' : ''}`}
                to='/pending-aprovals'
            >
                Pending Approvals
            </Link>
            <Link
                className={`text-blue-600 hover:underline mr-5 hover:text-blue-800 ${location.pathname === '/active-users' ? 'font-bold underline' : ''}`}
                to='/active-users'
            >
                Active Users
            </Link>
        </div>
            <table className="min-w-full divide-y divide-gray-200 p-2">
                <thead className="bg-gray-50 border">
                    <tr>
                        <th scope="col" className="px-3 border py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Name
                        </th>
                        <th scope="col" className="px-3 py-2 border text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Username
                        </th>
                        <th scope="col" className="border px-3 py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Email
                        </th>
                        <th scope="col" className=" border px-3 py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Mobile Number
                        </th>
                        <th scope="col" className="border px-3 py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Organisation
                        </th>
                        <th scope="col" className="border px-3 py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Job Title
                        </th>
                        <th scope="col" className="border px-3 py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Last Login
                        </th>
                        <th scope="col" className="border px-3 py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {activeUsersData.map((user, index) => (
                        <tr key={index}>
                            <td className="px-3 border py-2 whitespace-nowrap">
                                {user.name}
                            </td>
                            <td className="border px-3 py-2 whitespace-nowrap">
                                <span className='text-blue-500 underline cursor-pointer'>{user.userName}</span>
                            </td>
                            <td className="border px-3 py-2 whitespace-wrap">
                                {user.email}
                            </td>
                            <td className="border px-3 py-2 whitespace-wrap">
                                {user.mobileNum}
                            </td>
                            {user.organisation?(
                            <td className="border px-3 py-2 whitespace-wrap">
                                {user.organisation}
                            </td>
                            ):(
                            <td className="border px-3 py-2 whitespace-wrap">
                                N/A
                            </td>
                            )}
                            {user.jobTitle?(
                            <td className="border px-3 py-2 whitespace-wrap">
                                {user.jobTitle}
                            </td>
                            ):(
                            <td className="border px-3 py-2 whitespace-wrap">
                                N/A
                            </td>
                            )}
                            <td className="border px-3 py-2 whitespace-wrap">
                                {user.lastLogin}
                            </td>
                            <td className=" flex px-3 py-2 flex-col">
                                <button className='bg-green-400 hover:bg-green-600 cursor-pointer text-white font-bold rounded mb-2 text-sm'>Manage Useer</button>
                                <button className='bg-red-400 hover:bg-red-600 cursor-pointer text-white font-bold rounded text-sm'>Remove User</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </div>
    );
}

export default ActiveUserData;

import React, { useEffect, useState } from 'react';
import { Sidebar } from '../Components/UserComponents/Sidebar';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { toast } from 'react-toastify';

function UserDataPage() {
    const userData = useSelector(state => state.adminControlls.userLog);
    const [main, setMain] = useState('ml-[19rem]');
    const [sidebar, setSidebar] = useState('w-[18%] h-full');
    const navigate=useNavigate();
    
    const handlesideBarClosed = () => {
        setMain(main === 'ml-[19rem]' ? 'ml-[3rem]' : 'ml-[19rem]');
        setSidebar(sidebar === 'w-[18%] h-full' ? '' : 'w-[18%] h-full');
    }

    // Function to calculate total session duration
    const calculateTotalSessionDuration = (sessions) => {
        return sessions.reduce((total, session) => {
            const [hours, minutes, seconds] = session.sessionDuration.split(':').map(Number);
            return total + (hours * 3600) + (minutes * 60) + seconds;
        }, 0);
    };

    useEffect(()=>{
        let role=localStorage.getItem('userRole');
        if(role!=='admin'){
            toast.warn('Your not authorised to view this page!');
            navigate('/talk-ease');
        }
    },[])

    return (
        <div className='flex w-full h-full'>
            <div className={`${sidebar} fixed`}>
                <Sidebar sideBardClosed={handlesideBarClosed} />
            </div>
            <div className={`flex-1 ${main} h-full w-full p-4 overflow-y-auto mt-10`}>
                {userData.map((user, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md p-6 mb-6">
                        <div className='flex justify-between'>
                            <div className='flex gap-2'>
                                <h2 className="text-2xl font-semibold mb-4">{user.name}</h2>
                                {user.role === 'user' ? (
                                <button className="px-2 py-1 mb-4 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">
                                    Make as Admin
                                </button>) : (
                                <button className="px-2 py-1 mb-4 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none">
                                    Make as User
                                </button>
                                )}
                            </div>
                        <Link className='text-blue-600 underline' to='/active-users'><span><ArrowLeftIcon className="h-6 w-6 text-blue-600" />Back</span></Link>
                        </div>
                        <p><span className="font-semibold">Username:</span> {user.userName}</p>
                        <p><span className="font-semibold">Email:</span> {user.email}</p>
                        <p><span className="font-semibold">Mobile Number:</span> {user.mobileNum}</p>
                        <p><span className="font-semibold">Organisation:</span> {user.organisation}</p>
                        <p><span className="font-semibold">Job Title:</span> {user.jobTitle}</p>
                        <p><span className="font-semibold">User Role:</span> {user.role}</p>
                        <div className='flex justify-between'>
                            <h3 className="text-lg font-semibold mt-6 mb-4">Session Details</h3>
                            <p className='font-bold mt-6 mb-4'>Total Session Duration: {new Date(calculateTotalSessionDuration(user.sessonDetails) * 1000).toISOString().substr(11, 8)}</p>
                        </div>
                        <table className="w-full border-collapse">
                            <thead>
                                <tr>
                                    <th className="border px-4 py-2">Start</th>
                                    <th className="border px-4 py-2">End</th>
                                    <th className="border px-4 py-2">Session Duration</th>
                                </tr>
                            </thead>
                            <tbody>
                                {user.sessonDetails.map((session, idx) => (
                                    <tr key={idx}>
                                        <td className="border px-4 py-2">{session.start}</td>
                                        <td className="border px-4 py-2">{session.end}</td>
                                        <td className="border px-4 py-2">{session.sessionDuration}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default UserDataPage;

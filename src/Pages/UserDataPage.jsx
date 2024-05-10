import React, { useEffect, useState } from 'react';
import { Sidebar } from '../Components/UserComponents/Sidebar';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeftIcon, BarsArrowDownIcon } from "@heroicons/react/24/solid";
import { toast } from 'react-toastify';
import MoreOptions from '../Components/UserComponents/MoreOptions';
import DateRangeComponent from '../Components/DateComponents/DateRangeComponent';

function UserDataPage() {
    const userData = useSelector(state => state.adminControlls.userLog);
    let [sidebar, setSidebar] = useState('block');
    let [showSide, setShowSide] = useState('hidden');
    const navigate = useNavigate();
    const [startDate,setStartDate]=useState();
    const [endDate,setEndDate]=useState();
    const [sortBy,setSortBy]=useState('default');

    const handlesideBarClosed = () => {
        setSidebar(sidebar === 'block' ? 'hidden' : 'block');
        setShowSide(showSide === 'block' ? 'hidden' : 'block');
    }

    // Function to calculate total session duration
    const calculateTotalSessionDuration = (sessions) => {
        return sessions.reduce((total, session) => {
            const [hours, minutes, seconds] = session.sessionDuration.split(':').map(Number);
            const sessionSeconds = hours * 3600 + minutes * 60 + seconds;
            return total + sessionSeconds;
        }, 0);
    };

    useEffect(() => {
        let role = localStorage.getItem('userRole');
        if (role !== 'admin') {
            toast.warn('You are not authorized to view this page!');
            navigate('/talk-ease');
        }
    }, [])

    const [sessionData, setSessionData] = useState([]);

    useEffect(() => {
        if (userData.length > 0 && userData[0].sessonDetails) {
            const formattedSessionData = userData[0].sessonDetails.map((session, idx) => ({
                id: idx + 1,
                start: session.start,
                end: session.end,
                sessionDuration: session.sessionDuration
            }));
            setSessionData(formattedSessionData);
        }
    }, [userData]);

    const handleDateResult=({startDate,endDate})=>{
        console.log('Start: ',startDate+'End: ',endDate);
        setSortBy('asending');
        setStartDate(startDate);
        setEndDate(endDate);
        
        // setMainUserData('API Data')
    }

    const handleSortByChange = (e) => {
        setSortBy(e.target.value);
        // Implement sorting logic here
        // You can use Array.sort() method to sort sessionData based on sessionDuration
        let sortedSessionData = [...sessionData];
        if (e.target.value === 'ascending') {
            sortedSessionData.sort((a, b) => a.sessionDuration.localeCompare(b.sessionDuration));
        } else if (e.target.value === 'descending') {
            sortedSessionData.sort((a, b) => b.sessionDuration.localeCompare(a.sessionDuration));
        } else if (e.target.value === 'default') {
            // If sorting by default, reset sessionData to its original state
            sortedSessionData = userData[0].sessonDetails.map((session, idx) => ({
                id: idx + 1,
                start: session.start,
                end: session.end,
                sessionDuration: session.sessionDuration
            }));
        }
        setSessionData(sortedSessionData);
    };
    

    return (
        <div className='flex w-screen h-screen'>
            <BarsArrowDownIcon className={`h-8 w-8 cursor-pointer top-0 left-0 ${showSide}`} onClick={handlesideBarClosed} />
            <div className={`${sidebar} w-[18%] h-full`}>
                <Sidebar sideBardClosed={handlesideBarClosed} />
            </div>
            <div className='flex-1 h-full w-[82%] p-4'>
                <MoreOptions />
                <div className='h-full w-[100%] mt-2 p-2 justify-between'>
                    <div className='w-full h-[38%] overflow-hidden'>
                        {userData.map((user, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-md p-6 mb-2">
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
                                    <Link className='text-blue-600 underline' to='/manage-users'><span><ArrowLeftIcon className="h-6 w-6 text-blue-600" />Back</span></Link>
                                </div>
                                <p><span className="font-semibold">Username:</span> {user.userName}</p>
                                <p><span className="font-semibold">Email:</span> {user.email}</p>
                                <p><span className="font-semibold">Mobile Number:</span> {user.mobileNum}</p>
                                <p><span className="font-semibold">Organisation:</span> {user.organisation}</p>
                                <p><span className="font-semibold">Job Title:</span> {user.jobTitle}</p>
                                <p><span className="font-semibold">User Role:</span> {user.role}</p>

                                <div className='flex justify-between'>
                                    <h3 className="text-lg font-semibold mt-6 ">Session Details</h3>
                                    <p className='font-bold mt-6 '>Total Session Duration: {new Date(calculateTotalSessionDuration(user.sessonDetails) * 1000).toISOString().substr(11, 8)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='w-full h-[15%] flex mb-2 justify-between'>
                            <div className='h-full w-[52%]'>

                            </div>
                            <div className='h-full w-[48%]'>
                                <div className='flex w-full mb-2 justify-start'>
                                    <span className='font-bold underline'>Search By Date and Session Duration</span>
                                </div>
                                <div className='flex w-full mb-2 justify-end'>
                                    <DateRangeComponent result={handleDateResult}/>
                                        
                                </div>
                                {sortBy ? (
                                <div className='flex w-full justify-end'>
                                    Sort By Session Duration:{' '}
                                    <select
                                        value={sortBy}
                                        onChange={handleSortByChange}
                                        className="border border-gray-300 rounded px-2 py-1 mb-4"
                                    >
                                        <option value="default">Default</option>
                                        <option value="ascending">Ascending</option>
                                        <option value="descending">Descending</option>
                                    </select>
                                </div>
                            ) : null}
                            </div>
                        </div>
                    <div className='w-full h-[57%] overflow-y-auto'>
                        <table className="w-full border-collapse mb-5">
                            <thead className='bg-gray-50 border sticky top-0'>
                                <tr>
                                    <th className="border px-1 py-2">S.No</th>
                                    <th className="border px-4 py-2">Start</th>
                                    <th className="border px-4 py-2">End</th>
                                    <th className="border px-4 py-2">Session Duration</th>
                                </tr>
                            </thead>
                            <tbody>
                                {sessionData.map((session, idx) => (
                                    <tr key={idx}>
                                        <td className="border px-1 py-2 text-center">{session.id}</td>
                                        <td className="border px-4 py-2">{session.start}</td>
                                        <td className="border px-4 py-2">{session.end}</td>
                                        <td className="border px-4 py-2">{session.sessionDuration}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserDataPage;

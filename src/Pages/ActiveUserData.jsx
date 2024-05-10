import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../Redux/Slicers/AdminSlice';
import { Sidebar } from '../Components/UserComponents/Sidebar';
import { XCircleIcon,BarsArrowDownIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import MoreOptions from '../Components/UserComponents/MoreOptions';
import DateRangeComponent from '../Components/DateComponents/DateRangeComponent';

function ActiveUserData(props) {
    const activeUsersData = useSelector(state => state.adminControlls.activeUsersData);
    const [mainUsersData,setMainUserData]=useState(activeUsersData);
    const dispatch = useDispatch();
    const [searchInput, setSearchInput] = useState('');
    const [filteredUsers, setFilteredUsers] = useState([]);
    let location = useLocation();
    let [sidebar,setSidebar]=useState('block');
    let [showSide,setShowSide]=useState('hidden');
    const navigate=useNavigate();
    const [startDate,setStartDate]=useState();
    const [endDate,setEndDate]=useState();
    const [sortBy,setSortBy]=useState();
    const[moduleChanged,setModuleChanged]=useState('font-bold underline')
    
    useEffect(() => {
        const userRole = localStorage.getItem('userRole');
        dispatch(getUsers(userRole));
    }, [dispatch]);

    useEffect(() => {
        console.log(activeUsersData);
        const filtered = mainUsersData.filter(user =>
            user.name.toLowerCase().includes(searchInput.toLowerCase()) ||
            user.userName.toLowerCase().includes(searchInput.toLowerCase()) ||
            user.email.toLowerCase().includes(searchInput.toLowerCase()) ||
            user.mobileNum.includes(searchInput) ||
            user.role.includes(searchInput)||
            (user.organisation && user.organisation.toLowerCase().includes(searchInput.toLowerCase())) ||
            (user.jobTitle && user.jobTitle.toLowerCase().includes(searchInput.toLowerCase()))
        );
        setFilteredUsers(filtered);
    }, [searchInput, mainUsersData]);


    const handlesideBarClosed=()=>{
        setSidebar(sidebar==='block'?'hidden':'block');
        setShowSide(showSide==='block'?'hidden':'block');
      }

    const handleSearchChange = (e) => {
        setSearchInput(e.target.value);
    };

    useEffect(()=>{
        let role=localStorage.getItem('userRole');
        if(role!=='admin'){
            toast.warn('Your not authorised to view this page!');
            navigate('/talk-ease');
        }
    },[])
    const handleManage=()=>{
        navigate('/user');
    }

    const handleDateResult=({startDate,endDate})=>{
        console.log('Start: ',startDate+'End: ',endDate);
        setSortBy('asending');
        setStartDate(startDate);
        setEndDate(endDate);
        
        // setMainUserData('API Data')
    }

    const handleSortbyChange = (e) => {
        const sortType = e.target.value;
        setSortBy(sortType);
        console.log(sortType);
    
        let sortedUsers = [...filteredUsers];
    
        if (sortType === 'ascending') {
            sortedUsers.sort((a, b) => {
                const timeA = a.totalSessionDuration.split(':').reduce((acc, curr, i) => acc + curr * Math.pow(60, 2 - i), 0);
                const timeB = b.totalSessionDuration.split(':').reduce((acc, curr, i) => acc + curr * Math.pow(60, 2 - i), 0);
                return timeA - timeB;
            });
        } else if (sortType === 'descending') {
            sortedUsers.sort((a, b) => {
                const timeA = a.totalSessionDuration.split(':').reduce((acc, curr, i) => acc + curr * Math.pow(60, 2 - i), 0);
                const timeB = b.totalSessionDuration.split(':').reduce((acc, curr, i) => acc + curr * Math.pow(60, 2 - i), 0);
                return timeB - timeA;
            });
        }
        else if(sortType==='default'){
            setFilteredUsers(mainUsersData);
            return;
        }
    
        setFilteredUsers(sortedUsers);
    };
    
    const handleModuleChange=()=>{
        props.moduleChanged('pendingUsers');
        setModuleChanged('');
      }

    return (
        <div className='flex w-screen h-screen'>
            <BarsArrowDownIcon className={`h-8 w-8 cursor-pointer top-0 left-0 ${showSide}`} onClick={handlesideBarClosed} /> 
            <div className={`${sidebar} w-[18%] h-full`}>
                <Sidebar sideBardClosed={handlesideBarClosed}/>
            </div>
            <div className='flex-1 h-full w-[82%] p-4 overflow-y-auto'>
                <MoreOptions/>
                <div className='h-full w-[100%] justify-between mt-5'>
                    <div className='w-full h-[7%]'>
                        <div className='flex justify-between'>
                            <div className='flex'>
                                <Link
                                    className={`text-blue-600 hover:underline mr-5 hover:text-blue-800`}
                                    onClick={handleModuleChange}
                                >
                                    Pending Approvals
                                </Link>
                                <Link
                                    className={`text-blue-600 hover:underline mr-5 hover:text-blue-800 ${moduleChanged}`}
                                    
                                >
                                    Active Users
                                </Link>
                            </div>
                            <div className='flex gap-1'>
                                    <div className='flex'>
                                            <input
                                            type="text"
                                            value={searchInput}
                                            onChange={handleSearchChange}
                                            placeholder="Search..."
                                            className="px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                                            />
                                            {searchInput && (
                                                <button
                                                className="absolute right-10 top-10 mt-1 mr-1"
                                                onClick={() => setSearchInput('')}
                                                >
                                                <XCircleIcon className="h-5 w-5 text-red-500 cursor-pointer" />
                                                </button>
                                            )}
                                            <MagnifyingGlassIcon className="h-6 w-6 mt-1 text-gray-600" /> 
                                    </div>
                            </div>
                        </div>
                        </div>
                        <div className='w-full h-[15%] flex mb-2 justify-between'>
                            <div className='h-full w-[52%]'>

                            </div>
                            <div className='h-full w-[48%]'>
                                <div className='flex w-full mb-2 justify-start'>
                                    <span className='font-bold underline'>Search User By Date and Session Duration</span>
                                </div>
                                <div className='flex w-full mb-2 justify-end'>
                                    <DateRangeComponent result={handleDateResult}/>
                                        
                                </div>
                                {sortBy?(
                                <div className='flex w-full justify-end'>
                                    Sort By Session Duration: 
                                    <select
                                    value={sortBy}
                                    onChange={handleSortbyChange}
                                    className="border border-gray-300 rounded px-2 py-1 mb-4"
                                    >
                                        <option value="default">Default</option>
                                        <option value="ascending">Ascending</option>
                                        <option value="descending">Descending</option>
                                    </select>
                                </div>
                                ):(null)}
                            </div>
                        </div>
                        <div className='w-full h-[78%] overflow-y-auto'>
                                <table className="min-w-full divide-y divide-gray-200 p-2 mb-5">
                                    <thead className="bg-gray-50 border sticky top-0 ">
                        <tr>
                            <th scope="col" className="px-1 py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border">
                                S.No
                            </th>
                            <th scope="col" className="px-1 py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border">
                                Name
                            </th>
                            <th scope="col" className="px-1 py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border">
                                Username
                            </th>
                            <th scope="col" className="px-1 py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border">
                                Email
                            </th>
                            <th scope="col" className="px-1 py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border">
                                Mobile Number
                            </th>
                            <th scope="col" className="px-1 py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border">
                                Organisation
                            </th>
                            <th scope="col" className="px-1 py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border">
                                Job Title
                            </th>
                            <th scope="col" className="px-1 py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border">
                                Role
                            </th>
                            <th scope="col" className="px-1 py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border">
                                Last Login
                            </th>
                            {startDate|| sortBy?(
                            <th scope="col" className="px-1 py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border">
                                Total Session Duration
                            </th>
                            ):(null)}
                            <th scope="col" className="px-3 py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {filteredUsers.map((user, index) => (
                            <tr key={index}>
                                <td className="px-1 py-2 text-center border">{index+1}</td>
                                <td className="px-1 py-2 text-center border">{user.name}</td>
                                <td className="px-1 py-2 text-center border">
                                    <Link to='/user'><span className='text-blue-500 underline cursor-pointer'>{user.userName}</span></Link>
                                </td>
                                <td className="px-1 py-2 text-center border">{user.email}</td>
                                <td className="px-1 py-2 text-center border">{user.mobileNum}</td>
                                <td className="px-1 py-2 text-center border">{user.organisation ? user.organisation : 'N/A'}</td>
                                <td className="px-1 py-2 text-center border">{user.jobTitle ? user.jobTitle : 'N/A'}</td>
                                <td className="px-1 py-2 text-center border">{user.role}</td>
                                <td className="px-1 py-2 text-center border">{user.lastLogin}</td>
                                {startDate|| sortBy?(
                                    <td className="px-1 py-2 text-center border">{user.totalSessionDuration}</td>
                                ):(null)}
                                <td className="border flex px-3 py-2 flex-col justify-center items-center gap-1">
                                    <button className='bg-green-400 hover:bg-green-600 cursor-pointer text-white font-bold rounded mb-2 text-sm p-1' onClick={handleManage}>Manage</button>
                                    <button className='bg-red-300 hover:bg-red-600 cursor-pointer text-white font-bold rounded text-sm p-1'>Remove</button>
                                </td>
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

export default ActiveUserData;

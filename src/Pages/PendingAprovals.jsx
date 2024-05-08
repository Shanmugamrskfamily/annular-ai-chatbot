import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPendingUsers } from '../Redux/Slicers/AdminSlice';
import { Sidebar } from '../Components/UserComponents/Sidebar';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { XCircleIcon,BarsArrowDownIcon,MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { toast } from 'react-toastify';
import MoreOptions from '../Components/UserComponents/MoreOptions';

function PendingAprovals() {
    const pendingUsersData = useSelector(state => state.adminControlls.pendingUsers);
    const dispatch = useDispatch();
    const [searchInput, setSearchInput] = useState('');
    const [filteredUsers, setFilteredUsers] = useState([]);
    let [sidebar,setSidebar]=useState('block');
    let [showSide,setShowSide]=useState('hidden');
    let location=useLocation();
    const navigate=useNavigate();

    const handlesideBarClosed=()=>{
        setSidebar(sidebar==='block'?'hidden':'block');
        setShowSide(showSide==='block'?'hidden':'block');
      }
    
    useEffect(() => {
        const userRole = localStorage.getItem('userRole');
        if(userRole!=='admin'){
          toast.warn('Your not authorised to view this page!');
          navigate('/talk-ease');
        }
        dispatch(getPendingUsers(userRole));
    }, []);

    useEffect(() => {
      console.log(pendingUsersData);
      const filtered = pendingUsersData.filter(user =>
          user.name.toLowerCase().includes(searchInput.toLowerCase()) ||
          user.userName.toLowerCase().includes(searchInput.toLowerCase()) ||
          user.email.toLowerCase().includes(searchInput.toLowerCase()) ||
          user.mobileNum.includes(searchInput) ||
          (user.organisation && user.organisation.toLowerCase().includes(searchInput.toLowerCase())) ||
          (user.jobTitle && user.jobTitle.toLowerCase().includes(searchInput.toLowerCase()))
      );
      setFilteredUsers(filtered);
  }, [searchInput, pendingUsersData]);

    const handleSearchChange = (e) => {
      setSearchInput(e.target.value);
  };
    
    return (
        <div className='flex w-screen h-screen'>
            <BarsArrowDownIcon className={`h-8 w-8 cursor-pointer top-0 left-0 ${showSide}`} onClick={handlesideBarClosed} /> 
            <div className={`${sidebar} w-[18%] h-full`}>
                <Sidebar sideBardClosed={handlesideBarClosed}/>
            </div>
            <div className='flex-1 h-full w-[82%] p-4'>
            <MoreOptions/>
                <div className='h-full w-[100%] justify-between mt-5 mb-10'>
                    <div className='w-full h-[10%]'>
                        <div className='flex justify-between mb-5'>
                            <div className='flex'>
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
                        <div className='w-full h-[90%] overflow-y-auto'>
                                <table className="min-w-full divide-y divide-gray-200 p-2">
                                    <thead className="bg-gray-50 border sticky top-0">
                                        <tr>
                                            <th scope="col" className="px-1 border py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                S.No
                                            </th>
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
                                                Requested On
                                            </th>
                                            <th scope="col" className="border px-3 py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {filteredUsers.map((user, index) => (
                                        <tr key={index}>
                                            <td className="px-1 border text-center py-2 whitespace-nowrap">
                                                {index+1}
                                            </td>
                                            <td className="px-3 border py-2 whitespace-nowrap">
                                                {user.name}
                                            </td>
                                            <td className="border px-3 py-2 whitespace-nowrap">
                                                {user.userName}
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
                                            <td className="border px-2 py-2 whitespace-wrap">
                                                {user.requestedOn}
                                            </td>
                                            <td className="border flex px-3 py-2 flex-col justify-center items-center gap-1">
                                                <button className='bg-green-400 hover:bg-green-600 cursor-pointer text-white font-bold rounded text-sm p-1'>Aprove</button>
                                                <button className='bg-red-300 hover:bg-red-600 cursor-pointer text-white font-bold rounded text-sm p-1'>Reject</button>
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

export default PendingAprovals;

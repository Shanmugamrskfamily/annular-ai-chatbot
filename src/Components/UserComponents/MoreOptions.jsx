import React, { useState } from 'react';
import { UserCircleIcon, Cog6ToothIcon, InformationCircleIcon, PowerIcon,EllipsisVerticalIcon } from '@heroicons/react/24/solid';
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const options = [
    {
        label: "My Profile",
        icon: UserCircleIcon,
    },
    {
        label: "Settings",
        icon: Cog6ToothIcon,
    },
    {
        label: "About",
        icon: InformationCircleIcon,
    },
    {
        label: "Sign Out",
        icon: PowerIcon,
    },
];

function MoreOptions() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate=useNavigate()

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleSignout=()=>{
        localStorage.removeItem('token');
        localStorage.removeItem('userRole');
        toast.success('Signout Done!');
        toggleMenu();
        navigate('/login');
    }

    return (
        <div className="fixed inline-block top-0 right-4 bg-transperant rounded">
            <button onClick={toggleMenu} type="button" className="inline-flex justify-center w-10 h-10 text-gray-400 hover:text-gray-600 focus:outline-none focus:text-gray-600">
            <EllipsisVerticalIcon className="h-8 w-8 text-black" />
            </button>
            {isOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md  shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <div className="py-1" role="none">
                        {options.map((option, index) => (
                            <button
                                key={index}
                                className={`block w-full px-4 py-2 text-sm ${option.icon===PowerIcon?'text-red-400 hover:bg-red-900 hover:text-white':'text-gray-700 hover:bg-gray-100'}  hover:text-gray-900`}
                                role="menuitem"
                                onClick={option.icon===PowerIcon?handleSignout:''}
                            >
                                <div className="flex items-center">
                                    <option.icon className="w-4 h-4 mr-2" />
                                    <span>{option.label}</span>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default MoreOptions;

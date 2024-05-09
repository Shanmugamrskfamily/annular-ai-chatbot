import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

function UserEmailVerification() {
    const { verificationToken } = useParams();
    const [verificationStatus, setVerificationStatus] = useState('pending');

    useEffect(() => {
        const verifyEmail = async () => {
            try {
                const response = await axios.post(`http://localhost:4000/user/email-verification/${verificationToken}`);
                
                if (response.status === 200) {
                    setVerificationStatus('success');
                    toast.success('Email verified successfully! Wait for Admin Approval!');
                } else {
                    setVerificationStatus('error');
                    toast.error('Error verifying email. Please try again later.');
                }
            } catch (error) {
                setVerificationStatus('error');
                toast.error(error.response.data.message || 'Error verifying email. Please try again later.');
            }
        };

        verifyEmail();
    }, [verificationToken]);

    console.log('Token Received:',verificationToken);
    return (
        <div className="flex items-center justify-center h-screen">
            {verificationStatus === 'pending' && (
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
            )}
            {verificationStatus === 'success' && (
                <div className="text-green-600">Email verified successfully! Wait for Admin Approval!</div>
            )}
            {verificationStatus === 'error' && (
                <div className="text-red-600">Error verifying email. Please try again later.</div>
            )}
        </div>
    );
}

export default UserEmailVerification;

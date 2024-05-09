import axios from "axios";

const BASE_API='';

export const loginAPI=async (data)=>{

    try {
        let res=await axios.post(`${BASE_API}/login`,data);
        return res.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const singupAPI=async(data)=>{
    try {
        let res= await axios.post(`${BASE_API}/signup`,data);
        return res.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const emailVerificationAPI=async(verificationToken)=>{
    try {
        let res=await axios.post(`${BASE_API}/email-verification/${verificationToken}`);
        return res.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}


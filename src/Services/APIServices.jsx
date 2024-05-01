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

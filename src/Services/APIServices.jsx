import axios from "axios";

const BASE_API='';

const loginAPI=(data)=>{
async function login(){
    try {
        let res=await axios.post(`${BASE_API}/login`,data);
        let data=await res.json();
    } catch (error) {
        console.error(error);
        throw new Error(error);
    }
}
login();
}


export {loginAPI}
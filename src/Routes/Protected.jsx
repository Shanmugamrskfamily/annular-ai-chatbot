import { Navigate } from "react-router-dom";


const Protected=({Children})=>{
    const token=localStorage.getItem('token');
    return token?Children:<Navigate to='/login'/>
}

export default Protected;
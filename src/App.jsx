import { BrowserRouter, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import PageNotFound from './Pages/PageNotFound';
import 'react-toastify/dist/ReactToastify.css';
import  NavbarMain  from './Components/AuthComponents/Navbar';
import { ToastContainer } from 'react-toastify';
import Protected from './Routes/Protected';
import TalkEase from './Pages/TalkEase';
import ActiveUserData from './Pages/ActiveUserData';
import PendingAprovals from './Pages/PendingAprovals';
import UserDataPage from './Pages/UserDataPage';
import SummerEase from './Pages/SummerEase';


function App() {
  
    return (
      <BrowserRouter>
      <ToastContainer position="top-right" autoClose={2000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" transition: Bounce/>
      <NavbarMain/>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/talk-ease' element={<Protected> <TalkEase/> </Protected>}/>
          <Route path='/active-users' element={<Protected> <ActiveUserData/> </Protected>}/>
          <Route path='/pending-aprovals' element={<Protected> <PendingAprovals/> </Protected>}/>
          <Route path='/user' element={<Protected> <UserDataPage/> </Protected>}/>
          <Route path='/summerease' element={<Protected> <SummerEase/> </Protected>}/>
          <Route path='*' element={<PageNotFound/>} />
        </Routes>
      </BrowserRouter>
    );
  } 

export default App;

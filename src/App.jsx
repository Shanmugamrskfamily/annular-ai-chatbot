import { BrowserRouter, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import PageNotFound from './Pages/PageNotFound';
import 'react-toastify/dist/ReactToastify.css';
import  NavbarMain  from './Components/AuthComponents/Navbar';
import { ToastContainer } from 'react-toastify';
import { MainHeader } from './Components/UserComponents/Header';
import Protected from './Routes/Protected';
import TalkEase from './Pages/TalkEase';
import Convert from './Pages/Convert';
import ActiveUserData from './Pages/ActiveUserData';
import MoreOptions from './Components/UserComponents/MoreOptions';
import PendingAprovals from './Pages/PendingAprovals';
import UserDataPage from './Pages/UserDataPage';


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
          <Route path='*' element={<PageNotFound/>} />
        </Routes>
      </BrowserRouter>
    );
  } 

export default App;

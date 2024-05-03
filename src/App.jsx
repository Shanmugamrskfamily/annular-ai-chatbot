import { BrowserRouter, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authenticate } from './Redux/Slicers/UserSlice';
import Authenticated from './Authenticated';
import PageNotFound from './Pages/PageNotFound';
import 'react-toastify/dist/ReactToastify.css';
import  NavbarMain  from './Components/AuthComponents/Navbar';
import { ToastContainer } from 'react-toastify';
import { MainHeader } from './Components/UserComponents/Header';
import Protected from './Routes/Protected';
import TalkEase from './Pages/TalkEase';

function App() {
  
  
    return (
      <BrowserRouter>
      <ToastContainer position="top-right" autoClose={2000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" transition: Bounce/>
      <NavbarMain/>
      <MainHeader/>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/talk-ease' element={<Protected> <TalkEase/> </Protected>}/>
          <Route path='*' element={<PageNotFound/>} />
        </Routes>
      </BrowserRouter>
    );
  } 

export default App;

import { BrowserRouter, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authenticate } from './Redux/Slicers/UserSlice';
import Authenticated from './Authenticated';
import PageNotFound from './Pages/PageNotFound';
import { ComplexNavbar } from './Components/Navbar';
import { Header } from './Components/Header';

function App() {
  const isAuthenticated = useSelector(state => state.user.isAuthenticated);
  const dispatch = useDispatch();
  

  useEffect(() => {
    dispatch(authenticate());
  }, [dispatch]);

  

  if (!isAuthenticated) {
    return (
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='*' element={<PageNotFound/>} />
        </Routes>
      </BrowserRouter>
    );
  } else {
    return (
      <BrowserRouter>
      
        <Routes>
          <Route path='/authenticated' element={<Authenticated />} />
          <Route path='*' element={<PageNotFound/>} />
          {/* <Route path="*" element={<Navigate to={token ? "/app/welcome" : "/login"} replace />}/> */}
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;

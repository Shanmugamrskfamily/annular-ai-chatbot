import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authenticate } from './Redux/Slicers/UserSlice';


function App() {
  const isAuthenticated = useSelector(state => state.user.isAuthenticated);
  const dispatch = useDispatch();

  console.log(isAuthenticated)

  useEffect(() => {
    dispatch(authenticate());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        {!isAuthenticated ? (
          <>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          </>
        ) : (
          <Route path='/*' element={<AuthenticatedContent />} />
        )}
      </Routes>
    </BrowserRouter>
  );
}

function AuthenticatedContent() {
  return (
    <div>
      <h1>Authenticated user</h1>
    </div>
  );
}

export default App;

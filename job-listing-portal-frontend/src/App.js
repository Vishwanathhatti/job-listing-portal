import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route, useLocation } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Register from './pages/Register';
import Footer from './components/Footer';

function App() {
  const location = useLocation();
  const showFooter = !['/', '/register'].includes(location.pathname);
  
  return (
    <>
      <Navbar />
      <div className='pt-5'>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Homepage />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </div>
      {showFooter && <Footer />}
    </>
  );
}

export default App;

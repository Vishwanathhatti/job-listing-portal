import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Register from './pages/Register';
import Footer  from './components/Footer';


function App() {
  return (
  <>
  <Navbar />
  <div className='my-20 pt-5'>
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/home' element={<Homepage />} />
    </Routes>
  </div>
  <Footer />
  </>
  );
}

export default App;

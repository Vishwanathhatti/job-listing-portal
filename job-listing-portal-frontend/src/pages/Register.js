// src/pages/Register.js

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'

const Register =()=>{

  const navigate= useNavigate();
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')



  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3200/register', { name, email, password })
      .then(result => {
        console.log(result);
        navigate('/login'); 
      })
      .catch(err => console.log(err));
  };
  

  return (
    <div className="mt-14 min-h-screen flex items-center justify-center ">
      <div className="bg-white p-8 rounded-lg  w-full max-w-screen-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 flex flex-col md:flex-row md:space-x-4">
            <div className="flex-1 mb-4 md:mb-0">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="firstName"
                name="firstName"
                type="text"
                placeholder="First Name"
                onChange={(e)=>{setName(e.target.value)}}
                
                required
              />
            </div>

          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              name="email"
              type="email"
              placeholder="Email Address"
              onChange={(e)=>{setEmail(e.target.value)}}
              
              
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              onChange={(e)=>{setPassword(e.target.value)}}
              
              
              required
            />
          </div>

          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit">
              Register
            </button>
          </div>

        </form>
        <div className="mt-6 text-center">
          <p className="text-gray-700 text-sm">Already registered?</p>
          <Link to="/" className="text-blue-500 hover:text-blue-700 font-bold">
            Login here
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;

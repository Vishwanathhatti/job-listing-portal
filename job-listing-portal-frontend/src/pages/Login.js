import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'


const Login = () => {

  const navigate= useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:3200/login', {email, password})
    .then(result => {console.log(result)
      if(result.data === "Success"){
      navigate('/home')
      }
    })
    .catch(err=> console.log(err))
  }
  
  return (
    
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      <h2 className="text-2xl font-bold text-center mb-8">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            placeholder="abc@gmail.com"
            onChange={(e)=>{setEmail(e.target.value)}}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
            onChange={(e)=>{setPassword(e.target.value)}}

          />
          {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
        </div>
        <div className="flex items-center justify-between mb-6">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
          
          <Link to="/" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
            Forgot Password?
          </Link>
        </div>
        
        <div className="text-center">
          <p className="text-sm text-gray-700">Don't have an account? 
            <Link to="/register" className="font-bold text-blue-500 hover:text-blue-800 ml-1">
              Register
            </Link>
          </p>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Login
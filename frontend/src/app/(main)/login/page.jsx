import React from 'react'
import Aurora from '@/components/Aurora'
import Navbar from '@/components/Navbar';
const Login = () => {
  return (
    
    <div className='relative h-screen bg-black'>
          {/* Aurora component for background effect */}
          <Aurora
            colorStops={["#4400ff", "#b41d84", "#3adfc3"]}
            blend={1.5}
            amplitude={2.0}
            speed={0.5}
          />
          
          {/* Centered Signup Form */}
          <div className='shadow-[0px_10px_30px_rgba(64,224,208,0.7)] mt-2 rounded-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold  bg-opacity backdrop-blur-lg'>
    
            <h1 className='text-center text-4xl text-White'>Login</h1>
    
            {/* Name Input */}
            <div className="mt-4 mx-5">
              <label className='text-lg text-white font-bold'>Enter your username:</label>
              <input 
                type="username" 
                id="username" 
                className='border border-gray-300 w-full p-2 mt-2 rounded text-white'
                placeholder="Your username" 
              />
            </div>
    
            {/* Password Input */}
            <div className="mt-4 mx-5">
              <label className='text-lg text-white font-bold'>Enter your password:</label>
              <input 
                type="password" 
                id="password" 
                className='border border-gray-300 w-full p-2 mt-2 rounded text-white'
                placeholder="Your password"
              />
            </div>
    
            {/* Signup Button */}
            <div className="mt-6 mb-1 text-center">
              <button className='bg-violet-700 mx-10 hover:bg-green-600 text-white rounded p-2'>
                Login
              </button>
              <button className='bg-violet-700 mr-5 hover:bg-red-500 text-white rounded p-2'>
                Forgot Password?
              </button>
            </div>
          </div>
        </div>
  );
};

export default Login
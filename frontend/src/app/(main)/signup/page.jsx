import React from 'react';
import Aurora from '@/components/Aurora';
import Navbar from '@/components/Navbar';
const Signup = () => {
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
      <div className='shadow-[0px_10px_30px_rgba(64,224,208,0.7)] mt-2 rounded-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold  bg-opacity-40 backdrop-blur-lg'>

        <h1 className='text-center text-4xl text-White'>Sign Up</h1>

        {/* Name Input */}
        <div className="mt-4 mx-5">
          <label className='text-lg text-white font-bold'>Enter your name:</label>
          <input 
            type="text" 
            id="name" 
            className='border border-gray-300 w-full p-2 mt-2 rounded text-white'
            placeholder="Your name" 
          />
        </div>

        {/* Email Input */}
        <div className="mt-4 mx-5">
          <label className='text-lg text-white font-bold'>Enter your email:</label>
          <input 
            type="email" 
            id="email" 
            className='border border-gray-300 w-full p-2 mt-2 rounded text-white'
            placeholder="Your email"
          />
        </div>
        {/* Password Input */}
        <div className="mt-4 mx-5">
          <label className='text-lg text-white font-bold'>Enter a password:</label>
          <input 
            type="password" 
            id="password" 
            className='border border-gray-300 w-full p-2 mt-2 rounded text-white'
            placeholder="Your password"
          />
        </div>

        {/* Signup Button */}
        <div className="mt-6 text-center">
          <button className='mb-2 bg-violet-500 hover:bg-red-500 text-white rounded p-2'>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;

import React from 'react';
import Navbar from './Navbar'; // Importing the Navbar component

const Login = () => {
  return (
    <div className="min-h-screen bg-indigo-900 flex flex-col justify-center items-center">
      <Navbar /> 
      <div className="bg-teal-400 p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-center text-white text-2xl font-bold mb-6">LOGIN HERE</h1>
        <form className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-white font-semibold">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              className="form-input mt-1 block w-full p-2 rounded-lg text-black"
              placeholder="Enter username"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-white font-semibold">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-input mt-1 block w-full p-2 rounded-lg text-black"
              placeholder="Enter password"
            />
          </div>
          <div className="flex justify-between items-center">
            <a href="#" className="text-sm text-white">Forgot password?</a>
          </div>
          <button type="submit" className="bg-green-400 text-white font-semibold py-2 px-4 rounded-lg w-full">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-indigo-100">
      <h1 className="text-5xl font-bold text-indigo-700">Welcome Back!</h1>
      <p className="text-lg mt-4 mb-5">To stay connected, please login or sign up.</p>
      <Link to="/signup" className="mt-5 px-6 py-2 bg-white text-indigo-700 font-semibold rounded">
        Sign In
      </Link>
    </div>
  );
};

export default Welcome;

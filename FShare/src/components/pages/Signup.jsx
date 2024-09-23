import React from 'react';
import Navbar from '../essentials/Navbar';
import Footer from '../essentials/Footer';

const Signup = () => {
  return (
    <div>
    <Navbar />
    <div className="flex flex-col items-center justify-center h-screen bg-green-300">
      <h1 className="text-3xl font-bold mb-4">Sign Up</h1>
      <form className="w-1/3">
        <input type="text" placeholder="Username" className="w-full mb-4 p-2 border rounded" />
        <input type="email" placeholder="Email" className="w-full mb-4 p-2 border rounded" />
        <input type="password" placeholder="Password" className="w-full mb-4 p-2 border rounded" />
        <input type="confirmpassword" placeholder="Confirm Password" className="w-full mb-4 p-2 border rounded" />
        <button className="w-full bg-green-700 text-white py-2 rounded">Sign Up</button>
      </form>
    </div>
    <Footer />
    </div>
  );
};

export default Signup;

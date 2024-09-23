import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-5 bg-green-700 text-white">
      <div className="text-xl font-bold"> 
        <img src='FShare\src\assets\logo.PNG' alt="FShare" className="w-12 h-12"/>
      </div>
      <div>
        <a href="#login" className="px-4">Login</a>
        <a href="#signup" className="px-4">Sign Up</a>
      </div>
    </nav>
  );
};

export default Navbar;

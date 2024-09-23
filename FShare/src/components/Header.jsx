import React from 'react';

const Header = () => {
  return (
    <header className="text-center py-20 bg-green-500 text-white">
      <h1 className="text-4xl font-bold mb-4">Welcome Back!</h1>
      <p className="text-lg">To stay connected, please login with your personal info.</p>
      <button className="mt-5 px-6 py-2 bg-white text-green-700 font-semibold rounded">
        Sign In
      </button>
    </header>
  );
};

export default Header;

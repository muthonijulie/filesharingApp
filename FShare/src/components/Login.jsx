import React from 'react';

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-green-200">
      <h1 className="text-3xl font-bold mb-4">Login</h1>
      <form className="w-1/3">
        <input type="email" placeholder="Email" className="w-full mb-4 p-2 border rounded" />
        <input type="password" placeholder="Password" className="w-full mb-4 p-2 border rounded" />
        <button className="w-full bg-green-700 text-white py-2 rounded">Login</button>
      </form>
    </div>
  );
};

export default Login;

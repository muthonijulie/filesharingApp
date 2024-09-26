import React, { useState } from 'react';
import Navbar from '../essentials/Navbar';
import Footer from '../essentials/Footer';
import email_icon from '../../assets/email.jpeg';
import password_icon from '../../assets/password.jpeg';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    try {
      const response = await fetch('http://127.0.0.1:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      setSuccess('Login successful!');
      localStorage.setItem('token', data.token);
      navigate('/Dashboard');
    
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center mt-40 mb-40 bg-white pb-8">
        <div className="flex flex-col items-center mb-6">
          <div className="text-4xl font-bold text-indigo-800">Login</div>
          <div className="w-16 h-1 bg-indigo-800 rounded-md"></div>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="flex items-center bg-gray-200 rounded-md p-2">
            <img src={email_icon} alt="Email" className="mx-4" />
            <input
              type="email"
              name="email"
              placeholder="Email Id"
              className="bg-transparent border-none outline-none w-full"
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center bg-gray-200 rounded-md p-2">
            <img src={password_icon} alt="Password" className="mx-4" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="bg-transparent border-none outline-none w-full"
              onChange={handleChange}
            />
          </div>
          {error && <div className="text-red-500">{error}</div>}
          {success && <div className="text-green-500">{success}</div>}
          <div className="mt-6 text-gray-600">
            Lost Password?<span className="text-purple-800 cursor-pointer"> Click Here</span>
          </div>
          <button
            type="submit"
            className="cursor-pointer text-white rounded-full w-full h-14 bg-indigo-800 flex items-center justify-center font-bold"
          >
            Login
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Login;

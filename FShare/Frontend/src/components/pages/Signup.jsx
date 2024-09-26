import React, { useState } from 'react';
import Navbar from '../essentials/Navbar';
import Footer from '../essentials/Footer';
import user_icon from '../../assets/person.jpeg';
import email_icon from '../../assets/email.jpeg';
import password_icon from '../../assets/password.jpeg';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '', // New field for confirming the password
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = formData;

    // Validate that the password and confirm password match
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await fetch('http://127.0.0.1:5000/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Signup failed');
      }

      setSuccess('Signup successful! You can now login.');
      setFormData({ name: '', email: '', password: '', confirmPassword: '' }); // Reset fields
    
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center mt-39 bg-white pb-8">
        <div className="flex flex-col items-center mb-6">
          <div className="text-4xl font-bold text-indigo-800">Sign Up</div>
          <div className="w-16 h-1 bg-indigo-800 rounded-md"></div>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="flex items-center bg-gray-200 rounded-md p-2">
            <img src={user_icon} alt="User" className="mx-4" />
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="bg-transparent border-none outline-none w-full"
              onChange={handleChange}
            />
          </div>
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
          <div className="flex items-center bg-gray-200 rounded-md p-2">
            <img src={password_icon} alt="Confirm Password" className="mx-4" />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              className="bg-transparent border-none outline-none w-full"
              onChange={handleChange}
            />
          </div>
          {error && <div className="text-red-500">{error}</div>}
          {success && <div className="text-green-500">{success}</div>}
          <button
            type="submit"
            className="cursor-pointer text-white rounded-full w-full h-14 bg-indigo-800 flex items-center justify-center font-bold"
          >
            Sign Up
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;

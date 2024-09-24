import React, { useState } from 'react';
import Navbar from '../essentials/Navbar';
import Footer from '../essentials/Footer';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, email, password, confirmPassword } = formData;

    // Check if passwords match
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const response = await fetch('http://127.0.0.1:5000/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password }),
      });

      const result = await response.json();
      if (response.ok) {
        alert('User created successfully');
        // Optionally redirect or clear form here
      } else {
        console.error('Signup error: ', result);
        alert('Error: ' + (result.message || 'Signup failed, please try again later.'));
      }
    } catch (err) {
      console.error('Signup error', err);
      alert('An unexpected error occurred. Please try again later.');
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen bg-green-300">
        <h1 className="text-3xl font-bold mb-4">Sign Up</h1>
        <form className="w-1/3" onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="username" 
            placeholder="Username" 
            className="w-full mb-4 p-2 border rounded" 
            onChange={handleChange} 
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Email" 
            className="w-full mb-4 p-2 border rounded" 
            onChange={handleChange} 
          />
          <input 
            type="password" 
            name="password" 
            placeholder="Password" 
            className="w-full mb-4 p-2 border rounded" 
            onChange={handleChange} 
          />
          <input 
            type="password" 
            name="confirmPassword" 
            placeholder="Confirm Password" 
            className="w-full mb-4 p-2 border rounded" 
            onChange={handleChange} 
          />
          <button type="submit" className="w-full bg-green-700 text-white py-2 rounded">Sign Up</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;

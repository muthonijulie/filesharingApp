import React, { useState } from 'react';
import Navbar from '../essentials/Navbar';
import Footer from '../essentials/Footer';
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
        throw new Error('Login failed');
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
      <div className="flex flex-col items-center justify-center h-screen bg-green-200">
        <h1 className="text-3xl font-bold mb-4">Login</h1>
        <form className="w-1/3" onSubmit={handleSubmit}>
          <input 
            type="email" 
            name="email" 
            placeholder="Email" 
            className="w-full mb-4 p-2 border rounded" 
            onChange={handleChange} // Link input change to handleChange
          />
          <input 
            type="password" 
            name="password" 
            placeholder="Password" 
            className="w-full mb-4 p-2 border rounded" 
            onChange={handleChange} // Link input change to handleChange
          />
          <button className="w-full bg-green-700 text-white py-2 rounded">Login</button>
        </form>
        {error && <p className="text-red-500">{error}</p>} {/* Display error message */}
        {success && <p className="text-green-500">{success}</p>} {/* Display success message */}
      </div>
      <Footer />
    </div>
  );
};

export default Login;

import React from 'react';
import Navbar from '../essentials/Navbar';
import Footer from '../essentials/Footer';

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen bg-blue-200">
        <h1 className="text-4xl font-bold mb-4">Welcome to Your Dashboard!</h1>
        <p className="text-lg mb-4">You have successfully logged in.</p>
        <p className="text-lg mb-4">Feel free to explore the application.</p>
        <button
          className="mt-4 bg-blue-700 text-white py-2 px-4 rounded"
          onClick={() => {
            // Add functionality to navigate to other parts of the app
            console.log('Navigating to another page...');
          }}
        >
          Go to Profile
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;

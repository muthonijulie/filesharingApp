import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Sidebar from '../essentials/Sidebar';
import Navbar from '../essentials/Navbar';
import Footer from '../essentials/Footer';
import axios from 'axios';

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleFileUpload = async () => {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append('file', selectedFile);

    try{
      const response = await axios.post('/api/upload', formData, {
        headers:{
          'Content-Type': 'multipart/form-data',
        },

      });
      console.log(response.data);
      alert('File upload successful!');
    }catch(error){
      console.error('Error uploading file: ', error);
      alert('File upload failed.');
    }
  };
 
  return (
    <div>
      <Navbar />
      <div className="flex h-screen relative">
        {/* Toggle button for small screens */}
        <button
          className="lg:hidden absolute top-5 left-5 text-3xl text-black"
          onClick={toggleSidebar}
        >
          <FontAwesomeIcon icon={isSidebarOpen ? faTimes : faBars} className="text-black" />
        </button>

        {/* Sidebar */}
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

        {/* Main Content */}
        <div className="flex-1 bg-blue-50 flex flex-col justify-center items-center relative">
          <div className="text-center">
            <h2 className="text-2xl mb-4">Upload files</h2>
            <div className="border-2 border-dashed border-blue-500 bg-white p-10 w-3/5 mx-auto">
              <span className="text-2xl">⏫</span>
              <p className="mt-2">Drag and drop your files here</p>
              <button className="mt-5 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                Choose file
              </button>
            </div>
          </div>

          <button className="absolute bottom-5 right-5 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Learn More
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;

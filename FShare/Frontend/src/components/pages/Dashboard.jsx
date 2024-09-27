import React, { useState, useRef } from 'react'; // Import useRef and useState
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Sidebar from '../essentials/Sidebar';
import Navbar from '../essentials/Navbar';
import Footer from '../essentials/Footer';
import axios from 'axios';

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]); // State for selected files
  const fileInputRef = useRef(null); // Create a ref for the file input

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleFileChange = (e) => {
    setSelectedFiles(Array.from(e.target.files)); // Store selected files in state
  };

  const handleFileUpload = async () => {
    if (selectedFiles.length === 0) return;

    const formData = new FormData();
    selectedFiles.forEach((file) => {
      formData.append('files', file); // Append each file to FormData
    });

    try {
      const response = await axios.post('/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
      alert('Files upload successful!');
      setSelectedFiles([]); // Clear selected files after upload
    } catch (error) {
      console.error('Error uploading files: ', error);
      alert('File upload failed.');
    }
  };

  const openFilePicker = () => {
    fileInputRef.current.click(); // Programmatically click the hidden file input
  };

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-1 relative overflow-hidden">
        {/* Toggle button for small screens */}
        <button
          className="lg:hidden absolute top-5 left-5 text-3xl text-black z-10"
          onClick={toggleSidebar}
        >
          <FontAwesomeIcon icon={isSidebarOpen ? faTimes : faBars} className="text-black" />
        </button>

        {/* Sidebar */}
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

        {/* Main Content */}
        <div className="flex-1 bg-blue-50 flex flex-col justify-center items-center overflow-y-auto">
          <div className="text-center">
            <h2 className="text-2xl mb-4">Upload files</h2>
            <div className="border-2 border-dashed border-blue-500 bg-white p-10 w-3/5 mx-auto">
              <span className="text-2xl">⏫</span>
              <p className="mt-2">Drag and drop your files here</p>
              
              {/* Hidden File Input for Multiple Files */}
              <input
                type="file"
                onChange={handleFileChange}
                ref={fileInputRef} // Assign the ref here
                className="hidden" // Hide the input
                multiple // Allow multiple file selection
              />
              <button
                onClick={openFilePicker} // Trigger file picker
                className="mt-5 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              >
                Choose files
              </button>

              {/* Display Selected Files */}
              {selectedFiles.length > 0 && (
                <div className="mt-4 max-h-40 overflow-y-auto border border-gray-300 rounded p-2">
                  <h3 className="text-lg">Selected Files:</h3>
                  <ul className="list-disc list-inside">
                    {selectedFiles.map((file, index) => (
                      <li key={index} className="text-black">
                        {file.name}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <button
                onClick={handleFileUpload}
                className="mt-3 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
              >
                Upload Files
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

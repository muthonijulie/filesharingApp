import React from 'react';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`fixed lg:relative lg:block ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform transform lg:translate-x-0 w-64 h-full bg-blue-100 flex flex-col items-center py-5 shadow-lg z-50`}
    >
      {/* Close button for small screens */}
      <button
        className="lg:hidden absolute top-5 right-5 text-xl"
        onClick={toggleSidebar}
      >
        ✕
      </button>
      
      <div className="w-20 h-20 bg-blue-500 rounded-full mb-4"></div>
      <p>Profile</p>

      <div className="w-full mt-5">
        <div className="flex items-center p-3 cursor-pointer hover:bg-blue-200">
          <span className="mr-2">☁️</span>
          <p>My cloud</p>
        </div>
        <div className="flex items-center p-3 bg-blue-500 text-white cursor-pointer">
          <span className="mr-2">⏫</span>
          <p>Upload file</p>
        </div>
        <div className="flex items-center p-3 cursor-pointer hover:bg-blue-200">
          <span className="mr-2">⭐</span>
          <p>Favorites</p>
        </div>
        <div className="flex items-center p-3 cursor-pointer hover:bg-blue-200">
          <span className="mr-2">⚙️</span>
          <p>Settings</p>
        </div>
        <div className="flex items-center p-3 cursor-pointer hover:bg-blue-200">
          <span className="mr-2">↩️</span>
          <p>Log Out</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

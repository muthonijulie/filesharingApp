import React, { useState } from 'react';

const MyCloud = () => {
  const [files, setFiles] = useState([
    { id: 1, name: 'Document1.pdf', size: '1.2 MB', isChecked: false },
    { id: 2, name: 'Image1.png', size: '500 KB', isChecked: false },
    { id: 3, name: 'Video1.mp4', size: '10 MB', isChecked: false },
    // Add more files as needed
  ]);

  const handleCheckboxChange = (id) => {
    setFiles(files.map(file =>
      file.id === id ? { ...file, isChecked: !file.isChecked } : file
    ));
  };

  const cancelSelectedFiles = () => {
    setFiles(files.filter(file => !file.isChecked));
  };

  return (
    <div className="p-5">
      <h2 className="text-2xl mb-4">My Cloud Files</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="border px-4 py-2">Select</th>
              <th className="border px-4 py-2">File Name</th>
              <th className="border px-4 py-2">Size</th>
            </tr>
          </thead>
          <tbody>
            {files.map((file) => (
              <tr key={file.id} className="border-b hover:bg-gray-100">
                <td className="border px-4 py-2">
                  <input
                    type="checkbox"
                    checked={file.isChecked}
                    onChange={() => handleCheckboxChange(file.id)}
                  />
                </td>
                <td className="border px-4 py-2">{file.name}</td>
                <td className="border px-4 py-2">{file.size}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button
        className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
        onClick={cancelSelectedFiles}
      >
        Cancel Selected Files
      </button>
    </div>
  );
};

export default MyCloud;

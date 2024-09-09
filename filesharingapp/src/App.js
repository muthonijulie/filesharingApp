import React, { useState } from 'react';
import './App.css';

function App() {
  const [file, setFiles] = useState([]);

  const handleFileSelect = (event) => {
    const selectedFile = Array.from(event.target.file);
    setFiles(selectedFile);
  };

  return (
    <div className="container">
      <aside className="sidebar"></aside>

      <main className="main">
        <div className="upload">
          <h2>Upload Files</h2>
          <div className="uploadbox">
            <div className="dragdrop">
              <p>Drag and drop your files here</p>
              <button onClick={() => document.getElementById('fileInput').click()}>
                Choose files from your computer
              </button>
              <input
                type="file"
                id="fileInput"
                multiple
                style={{ display: 'none' }}
                onChange={handleFileSelect}
              />
            </div>
          </div>

          <div className="file-list">
            
            {file.map((file) => (
              <div key={file.name} className="file-item">
                <p>{file.name}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

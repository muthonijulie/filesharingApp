import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Login from './components/Login';
import Navbar from './components/Navbar';

import './index.css';

const App = () => {
  return(
    <Router>
      <Navbar /> 
      <Routes>
          <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
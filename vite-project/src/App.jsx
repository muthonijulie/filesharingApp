
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-dom';
import Login from './components/login';

import './index.css';


const App = () => {
  return(
    <Router>
      <Routes>
          <Route path ="/" element={<Login />}/>
      </Routes>
    </Router>
  )
}

export default App;


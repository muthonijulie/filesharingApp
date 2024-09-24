import React from 'react';
import Navbar from '../essentials/Navbar';
import Footer from '../essentials/Footer';
import Welcome from '../essentials/Welcome';

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Welcome />
      <Footer />
    </div>
  );
};

export default Homepage;

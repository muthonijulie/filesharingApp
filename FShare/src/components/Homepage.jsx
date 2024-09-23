import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';
import Welcome from './Welcome';

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Welcome />
      <Footer />
    </div>
  );
};

export default Homepage;

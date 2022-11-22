import React from 'react';
import Header from '../components/header/header';

import Router from '../components/Router/Router';
import './home.css';

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Router />
    </div>
  );
};

export default Home;

import React from 'react';
import Footer from '../footer/footer';
import './homePage.css';
import { NavLink, Outlet } from 'react-router-dom';
import Router from '../Router/Router';

const HomePage = () => {
  return (
    <div className="homePage">
      <div className="homePageBody">
        <div className="homePageHeader"></div>
        <div className="homePageBodyContents"></div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;

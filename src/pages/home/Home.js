// src/pages/home/Home.js
import React from 'react';
import './Home.css';
import Tumbnil from './homeCompnents/Tumbnil';  // Correct path for Tumbnil component
import Homecards from './homeCompnents/Homecards';  // Correct path for Tumbnil component
import Createproduct from './homeCompnents/Createproduct';  // Correct path for Tumbnil component
import Whychoose from './homeCompnents/Whychoose';
import Whyus from './homeCompnents/Whyus';
import Blogpage from './homeCompnents/Blogpage';
import Activeproces from './homeCompnents/Activeproces';

const Home = () => {
  return (
    <>
      
      <Tumbnil />
      <Createproduct/>
      <Homecards/> 
      <Whychoose/> 
      <Whyus/>
      <Activeproces/>
      <Blogpage/>
     
    </>
  );
};

export default Home;

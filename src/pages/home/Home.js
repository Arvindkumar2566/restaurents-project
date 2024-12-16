// src/pages/home/Home.js
import React from 'react';
import './Home.css';
import Tumbnil from './homeCompnents/Tumbnil';  // Correct path for Tumbnil component
import Homecards from './homeCompnents/Homecards';  // Correct path for Tumbnil component
import Createproduct from './homeCompnents/Createproduct';  // Correct path for Tumbnil component
import Whychoose from './homeCompnents/Whychoose';
import Activeproces from './homeCompnents/Activeproces';
import Blogpage from './homeCompnents/Blogpage';
import Statistics from './homeCompnents/Statistics'
import Ourclientsaying from './homeCompnents/Ourclientsaying';
import Chiefs from './homeCompnents/Chiefs';
import Ourmenu from './homeCompnents/Ourmenu';

const Home = () => {
  return (
    <>
      <Tumbnil/>
      <Createproduct/>
      <Homecards/> 
      <Whychoose/> 
      <Statistics/>
      <Ourmenu/>
      <Chiefs/>
      <Ourclientsaying/>
      <Activeproces/>
      <Blogpage/>
    </>
  );
};

export default Home;

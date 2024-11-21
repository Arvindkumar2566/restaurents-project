// src/pages/home/Home.js
import React from 'react';
import './Home.css';
import Tumbnil from './homeCompnents/Tumbnil';  // Correct path for Tumbnil component

const Home = () => {
  return (
    <div>
      
      <Tumbnil />  {/* Tumbnil component renders here */}
    </div>
  );
};

export default Home;

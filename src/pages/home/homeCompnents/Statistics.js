import React from 'react';
import './Statistics.css';
import { FaUtensils, FaHamburger, FaPizzaSlice } from 'react-icons/fa';
import { GiChefToque } from 'react-icons/gi';

const StatisticsSection = () => {
  return (
    <div className="statistics-section mt-5"
      style={{ backgroundImage: `url('/assets/images/front_Image1.svg')` }}
    >
      <div className="statistics-content">
        <div className="stat-item">
          <GiChefToque className="stat-icon" />
          <h3>Professional Chefs</h3>
          <p>420</p>
        </div>
        <div className="stat-item">
          <FaHamburger className="stat-icon" />
          <h3>Items Of Food</h3>
          <p>320</p>
        </div>
        <div className="stat-item">
          <FaUtensils className="stat-icon" />
          <h3>Years Of Experience</h3>
          <p>30+</p>
        </div>
        <div className="stat-item">
          <FaPizzaSlice className="stat-icon" />
          <h3>Happy Customers</h3>
          <p>220</p>
        </div>
      </div>
    </div>
  );
};

export default StatisticsSection;

import React from 'react';
import './Starter.css';

export default function Starter() {
  return (
    <div className="starter-menu-container">
      <div className="image-container">
        <img
          src="/assets/images/starter.svg" 
          alt="Food"
          className="food-image"
        />
      </div>
      <div className="menu-container">
        <img src='/assets/images/coffee.svg'/>
        <p className='starter-text'>Starter Menu</p>
        <div className="menu-item">
          <div className="menu-details">
            <p className='alder-text'>Alder Grilled Chinook Salmon</p>
            <p>Toasted French bread topped with romano, cheddar</p>
            <span>560 CAL</span>
          </div>
          <div className="menu-price">32$</div>
        </div>
        <div className="menu-item">
          <div className="menu-details">
            <p className='berrieer-text'>Berries and creme tart</p>
            <p>Gorgonzola, ricotta, mozzarella, taleggio</p>
            <span>700 CAL</span>
          </div>
          <div className="menu-price">43$</div>
        </div>
        <div className="menu-item">
          <div className="menu-details">
            <p className='tormentoso-text'>Tormentoso Bush Pizza Pintoage</p>
            <p>Ground cumin, avocados, peeled and cubed</p>
            <span>1000 CAL</span>
          </div>
          <div className="menu-price">14$</div>
        </div>
        <div className="menu-item">
          <div className="menu-details">
            <p className='Spicy-vegan-text'>Spicy Vegan Potato Curry</p>
            <p>Spreadable cream cheese, crumbled blue cheese</p>
            <span>560 CAL</span>
          </div>
          <div className="menu-price">35$</div>
        </div>
      </div>
    </div>
  );
};
  


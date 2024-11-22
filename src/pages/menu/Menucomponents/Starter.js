import React from 'react';
import './Starter.css';

export default function Starter() {
  return (
    <div className="starter-menu-container">
      <div className="image-containe">
        <img
          src="/assets/images/starter.svg" 
          alt="Food"
          className="food-image"
        />
      </div>
      <div className="menu-element container">
        <img src='/assets/images/coffee.svg'/>
        <p className='starter-text'>Starter Menu</p>
        <div className="menu-item">
          <div className="menu-details">
            <p className='alder-text'>Alder Grilled Chinook Salmon</p>
            <p className='items-description'>Toasted French bread topped with romano, cheddar
            <br/>560 CAL</p>
          </div>
          <div className="menu-price">32$</div>
        </div>
        <div className="menu-item">
          <div className="menu-details">
            <p className='berrieer-text'>Berries and creme tart</p>
            <p className='items-description'>Gorgonzola, ricotta, mozzarella, taleggio
            <br/>700 CAL</p>
          </div>
          <div className="menu-price">43$</div>
        </div>
        <div className="menu-item">
          <div className="menu-details">
            <p className='tormentoso-text'>Tormentoso Bush Pizza Pintoage</p>
            <p className='items-description'>Ground cumin, avocados, peeled and cubed
            <br/>1000 CAL</p>
          </div>
          <div className="menu-price">14$</div>
        </div>
        <div className="menu-item">
          <div className="menu-details">
            <p className='Spicy-vegan-text'>Spicy Vegan Potato Curry</p>
            <p className='items-description'>Spreadable cream cheese, crumbled blue cheese
            <br/>560 CAL</p>
          </div>
          <div className="menu-price">35$</div>
        </div>
      </div>
    </div>
  );
};
  


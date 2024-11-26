import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Starter.css';

export default function Starter() {
  const navigate = useNavigate();

 
  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="starter-menu">
      <div className="image-container">
        <img
          src="/assets/images/starter.svg"
          alt="Food"
          className="food-image"
        />
      </div>
      <div className="menu-element container">
        <img src="/assets/images/coffee.svg" alt="coffee" className='coffee'/>
        <p className="starter-text">Starter Menu</p>

        <ul className="menu-list">
          <li className="menu-item" onClick={() => handleNavigation('/home')}>
            <div className="menu-details">
              <p className="alder-text">Alder Grilled Chinook Salmon</p>
              <p className="items-description">
                Toasted French bread topped with romano, cheddar
                <br />
                560 CAL
              </p>
            </div>
            <div className="menu-price">32$</div>
          </li>

          <li className="menu-item" onClick={() => handleNavigation('/stir-fry')}>
            <div className="menu-details">
              <p className="berrieer-text">Berries and Creme Tart</p>
              <p className="items-description">
                Gorgonzola, ricotta, mozzarella, taleggio
                <br />
                700 CAL
              </p>
            </div>
            <div className="menu-price">43$</div>
          </li>

          <li className="menu-item" onClick={() => handleNavigation('/salad')}>
            <div className="menu-details">
              <p className="tormentoso-text">Tormentoso Bush Pizza Pintoage</p>
              <p className="items-description">
                Ground cumin, avocados, peeled and cubed
                <br />
                1000 CAL
              </p>
            </div>
            <div className="menu-price">14$</div>
          </li>

          <li className="menu-item" onClick={() => handleNavigation('/potato-curry')}>
            <div className="menu-details">
              <p className="Spicy-vegan-text">Spicy Vegan Potato Curry</p>
              <p className="items-description">
                Spreadable cream cheese, crumbled blue cheese
                <br />
                560 CAL
              </p>
            </div>
            <div className="menu-price">35$</div>
          </li>
        </ul>
      </div>
    </div>
  );
}

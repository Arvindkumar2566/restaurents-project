import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Dessert.css';

export default function Dessert() {
  const navigate = useNavigate();


  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="starter-menu-container">
      <div className="image-containe">
        <img
          src="/assets/images/dessert.svg"
          alt="Food"
          className="dessert-image"
        />
      </div>
      <div className="dessert-element container">
        <img src="/assets/images/coffee.svg" alt="coffee" className='coffee' />
        <p className="dessert-text">Dessert</p>

        {/* Dessert Items */}
        <ul className="dessert-list">
          <li className="dessert-item" onClick={() => handleNavigation('/fig-cake')}>
            <div className="dessert-details">
              <p className="fig-text">Fig and Lemon Cake</p>
              <p className="desserts-description">
                Toasted French bread topped with romano, cheddar
                <br />
                560 CAL
              </p>
            </div>
            <div className="dessert-price">32$</div>
          </li>

          <li className="dessert-item" onClick={() => handleNavigation('/creme-tart')}>
            <div className="dessert-details">
              <p className="creamy-text">Berries and Creme Tart</p>
              <p className="items-description">
                Gorgonzola, ricotta, mozzarella, taleggio
                <br />
                700 CAL
              </p>
            </div>
            <div className="dessert-price">43$</div>
          </li>

          <li className="dessert-item" onClick={() => handleNavigation('/blueberry-pastry')}>
            <div className="dessert-details">
              <p className="pastry-text">Pastry, Blueberries, Lemon Juice</p>
              <p className="items-description">
                Ground cumin, avocados, peeled and cubed
                <br />
                1000 CAL
              </p>
            </div>
            <div className="dessert-price">14$</div>
          </li>

          <li className="dessert-item" onClick={() => handleNavigation('/pain-au-chocolat')}>
            <div className="dessert-details">
              <p className="pain-text">Pain au Chocolat</p>
              <p className="items-description">
                Spreadable cream cheese, crumbled blue cheese
                <br />
                560 CAL
              </p>
            </div>
            <div className="dessert-price">35$</div>
          </li>
        </ul>
      </div>
    </div>
  );
}

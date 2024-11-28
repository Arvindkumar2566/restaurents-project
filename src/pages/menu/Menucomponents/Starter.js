import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Starter.css';

export default function Starter() {
  const navigate = useNavigate();

  const handleNavigation = (path, productDetails) => {
    navigate(path, { state: productDetails });
  };

  const products = [
    {
      name: 'Alder Grilled Chinook Salmon',
      description: 'Toasted French bread topped with romano, cheddar\n560 CAL',
      price: '32$',
      image: '/assets/images/starter.svg',
      catagory:"starter",
    },
    {
      name: 'Berries and Creme Tart',
      description: 'Gorgonzola, ricotta, mozzarella, taleggio\n700 CAL',
      price: '43$',
      image: '/assets/images/starter.svg',
      catagory:"starter",
    },
    {
      name: 'Tormentoso Bush Pizza Pintoage',
      description: 'Ground cumin, avocados, peeled and cubed\n1000 CAL',
      price: '14$',
      image: '/assets/images/pizza.svg',
      catagory:"pizza",
    },
    {
      name: 'Spicy Vegan Potato Curry',
      description: 'Spreadable cream cheese, crumbled blue cheese\n560 CAL',
      price: '35$',
      image: '/assets/images/starter.svg',
      catagory:"starter",
    },
  ];

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
        <img src="/assets/images/coffee.svg" alt="coffee" className="coffee" />
        <p className="starter-text">Starter Menu</p>

        <ul className="menu-list">
          {products.map((product) => (
            <li
              
              className="menu-item"
              onClick={() =>
                handleNavigation('/shop', {
                  name: product.name,
                  description: product.description,
                  price: product.price,
                  image: product.image,
                  catagory:product.catagory
                })
              }
            >
              <div className="menu-details">
                <p className="product-name">{product.name}</p>
                <p className="items-description">{product.description}</p>
              </div>
              <div className="menu-price">{product.price}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

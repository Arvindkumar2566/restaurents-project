import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dessert.css';

export default function Dessert() {
  const navigate = useNavigate();

  const handleNavigation = (path, productDetails) => {
    navigate(path, { state: productDetails });
  };

  const products = [
    {
      name: 'Fig and Lemon Cake',
      description: 'Toasted French bread topped with romano, cheddar\n560 CAL',
      price: '32$',
      image: '/assets/images/dessert.svg',
      category: 'dessert',
    },
    {
      name: 'Berries and Creme Tart',
      description: 'Gorgonzola, ricotta, mozzarella, taleggio\n700 CAL',
      price: '43$',
      image: '/assets/images/dessert.svg',
      category: 'dessert',
    },
    {
      name: 'Pastry, Blueberries, Lemon Juice',
      description: 'Ground cumin, avocados, peeled and cubed\n1000 CAL',
      price: '14$',
      image: '/assets/images/dessert.svg',
      category: 'dessert',
    },
    {
      name: 'Pain au Chocolat',
      description: 'Spreadable cream cheese, crumbled blue cheese\n560 CAL',
      price: '35$',
      image: '/assets/images/dessert.svg',
      category: 'dessert',
    },
  ];

  return (
    <div className="starter-menu-container">
      <div className="image-containe">
        <img
          src="/assets/images/dessert.svg"
          alt="Dessert"
          className="dessert-image"
        />
      </div>
      <div className="dessert-element container">
        <img src="/assets/images/coffee.svg" alt="coffee" className="coffee1" />
        <p className="dessert-text1">Dessert Menu</p>

        <ul className="dessert-list">
          {products.map((product) => (
            <li
              key={product.name}
              className="dessert-item"
              onClick={() =>
                handleNavigation('/shop', {
                  name: product.name,
                  description: product.description,
                  price: product.price,
                  image: product.image,
                  category: product.category,
                })
              }
            >
              <div className="dessert-details">
                <p className="dessert-text">{product.name}</p>
                <p className="items-description">{product.description}</p>
              </div>
              <div className="dessert-price">{product.price}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

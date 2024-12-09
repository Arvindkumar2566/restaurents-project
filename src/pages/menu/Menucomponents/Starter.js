import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Starter.css'; 

export default function Starter() {
  const navigate = useNavigate();

  const handleNavigation = (path, productDetails) => {
    localStorage.setItem('selectedProduct', JSON.stringify(productDetails)); // Save product details
    navigate(path, { state: productDetails });
  };

  const products = [
    {
      id: "alder-grilled-chinook-salmon",
      name: 'Alder Grilled Chinook Salmon',
      description: 'Toasted French bread topped with romano, cheddar\n560 CAL',
      price: '32$',
      image: '/assets/images/starter.svg',
      category: "starter",
    },
    {
      id: "berries-and-creme-tart",
      name: 'Berries and Creme Tart',
      description: 'Gorgonzola, ricotta, mozzarella, taleggio\n700 CAL',
      price: '43$',
      image: '/assets/images/starter.svg',
      category: "starter",
    },
    {
      id: "tormentoso-bush-pizza-pintoage",
      name: 'Tormentoso Bush Pizza Pintoage',
      description: 'Ground cumin, avocados, peeled and cubed\n1000 CAL',
      price: '14$',
      image: '/assets/images/pizza.svg',
      category: "pizza",
    },
    {
      id: "spicy-vegan-potato-curry",
      name: 'Spicy Vegan Potato Curry',
      description: 'Spreadable cream cheese, crumbled blue cheese\n560 CAL',
      price: '35$',
      image: '/assets/images/starter.svg',
      category: "starter",
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
              key={product.id} 
              className="menu-item"
              onClick={() =>
                handleNavigation('/shop', {
                  name: product.name,
                  description: product.description.replace(/\n/g, '<br />'), 
                  price: product.price,
                  image: product.image,
                  category: product.category
                })
              }
            >
              <div className="menu-details">
                <p className="product-name">{product.name}</p>
                <p className="items-description" dangerouslySetInnerHTML={{ __html: product.description }}></p>  
              </div>
              <div className="menu-price">{product.price}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

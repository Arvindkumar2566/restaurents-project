import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MainCourse.css';

const MainCourse = () => {
  const navigate = useNavigate();


  const handleNavigation = (path, productDetails) => {
    navigate(path, { state: productDetails });
  };


  const products = [
    {
      name: 'Optic Big Breakfast Combo Menu',
      description: 'Toasted French bread topped with romano, cheddar\n560 CAL',
      price: '32$',
      image: '/assets/images/main-course.svg',
      category: 'main-course',
    },
    {
      name: 'Cashew Chicken With Stir-Fry',
      description: 'Gorgonzola, ricotta, mozzarella, taleggio\n700 CAL',
      price: '43$',
      image: '/assets/images/main-course.svg',
      category: 'main-course',
    },
    {
      name: 'Vegetables & Green Salad',
      description: 'Ground cumin, avocados, peeled and cubed\n1000 CAL',
      price: '14$',
      image: '/assets/images/vegetable-salad.svg', // Example image for variety
      category: 'salad',
    },
    {
      name: 'Spicy Vegan Potato Curry',
      description: 'Spreadable cream cheese, crumbled blue cheese\n560 CAL',
      price: '35$',
      image: '/assets/images/vegan-curry.svg', 
      category: 'vegan',
    },
  ];

  return (
    <div className='main-element'>
      <div className="main-course-container ">
      <div className="main-course-left">
        <h1>
          <span className="icon">🍳</span> Main Course
        </h1>
        <ul className="menu-items">
          {products.map((product) => (
            <li
              key={product.name}
              onClick={() =>
                handleNavigation('/Shop', {
                  name: product.name,
                  description: product.description,
                  price: product.price,
                  image: product.image,
                  category: product.category,
                })
              }
            >
              <div className="item-details">
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p className="calories">{product.description.split('\n')[1]}</p>
              </div>
              <span className="price">{product.price}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="main-course-right">
        <img
          src="/assets/images/main-course.svg" // Use a default or category image
          alt="Main Course"
          className="main-course-image"
        />
      </div>
    </div>
    </div>
  );
};

export default MainCourse;

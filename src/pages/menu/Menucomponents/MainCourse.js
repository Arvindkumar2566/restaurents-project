import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MainCourse.css';

const MainCourse = () => {
  const navigate = useNavigate();

  // Function to handle navigation to specific paths
  const handleNavigation = (path) => {
    navigate(path); // Navigate to the provided path
  };

  return (
    <div className="main-course-container mx-5">
      <div className="main-course-left">
        <h1>
          <span className="icon">🍳</span> Main Course
        </h1>
        <ul className="menu-items">
          {/* Optic Big Breakfast Combo Menu */}
          <li onClick={() => handleNavigation('/breakfast')}>
            <div className="item-details">
              <h2>Optic Big Breakfast Combo Menu</h2>
              <p>Toasted French bread topped with romano, cheddar</p>
              <p className="calories">560 CAL</p>
            </div>
            <span className="price">32$</span>
          </li>
          {/* Cashew Chicken With Stir-Fry */}
          <li onClick={() => handleNavigation('/stir-fry')}>
            <div className="item-details">
              <h2>Cashew Chicken With Stir-Fry</h2>
              <p>Gorgonzola, ricotta, mozzarella, taleggio</p>
              <p className="calories">700 CAL</p>
            </div>
            <span className="price">43$</span>
          </li>
          {/* Vegetables & Green Salad */}
          <li onClick={() => handleNavigation('/salad')}>
            <div className="item-details">
              <h2>Vegetables & Green Salad</h2>
              <p>Ground cumin, avocados, peeled and cubed</p>
              <p className="calories">1000 CAL</p>
            </div>
            <span className="price">14$</span>
          </li>
          {/* Spicy Vegan Potato Curry */}
          <li onClick={() => handleNavigation('/potato-curry')}>
            <div className="item-details">
              <h2>Spicy Vegan Potato Curry</h2>
              <p>Spreadable cream cheese, crumbled blue cheese</p>
              <p className="calories">560 CAL</p>
            </div>
            <span className="price">35$</span>
          </li>
        </ul>
      </div>
      <div className="main-course-right">
        <img
          src="/assets/images/main_course_image.jpg"
          alt="Main Course"
          className="main-course-image"
        />
      </div>
    </div>
  );
};

export default MainCourse;

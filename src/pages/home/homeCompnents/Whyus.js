import React from 'react';
import './Whyus.css';

const Whyus = () => {
  return (
    <div className="whyus-container">
      {/* Left Section: Images */}
      <div className="image-grid">
        <img src="assets/images/WhyUs_1.svg" alt="Tacos" className="image-item" />
        <img src="assets/images/WhyUs_2.svg" alt="Burger" className="image-item" />
        <img src="assets/images/WhyUs_3.svg" alt="Chicken" className="image-item" />
        <img src="assets/images/WhyUs_4.svg" alt="Burger and Fries" className="image-item" />
        <img src="assets/images/WhyUs_5.svg" alt="Salad" className="image-item" />
      </div>

      {/* Right Section: Content */}
      <div className="content">
        <h3 className="why-title">Why Choose Us</h3>
        <h1 className="main-title">
          Extra <span className="highlight">ordinary</span> taste <br />
          And Experienced
        </h1>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
        </p>
        <div className="icons">
          <div className="icon-item">
            <i className="fas fa-hamburger"></i>
            <p>Fast Food</p>
          </div>
          <div className="icon-item">
            <i className="fas fa-utensils"></i>
            <p>Lunch</p>
          </div>
          <div className="icon-item">
            <i className="fas fa-wine-glass"></i>
            <p>Dinner</p>
          </div>
        </div>
        <div className="experience">
          <h2>30+</h2>
          <p>Years of <br /> Experienced</p>
        </div>
      </div>
    </div>
  );
};

export default Whyus;

import React from 'react';
import { Link } from 'react-router-dom';
import './Createproduct.css';

const Createproduct = () => {
  return (
    <div className="tumnil_head mt-3 col-sm-">
      {/* Left Section */}
      <div className="mt-5 ms-2 tumbnil_content">
        <h1 className="gold">About Us</h1>
        <h2 className="gold_1d mt-2 ms-4">
          <b>
            <span className="th_orange">We</span> create the best<br /> foody product
          </b>
        </h2>
        <p className="gold_2d ">
     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rius sed pharetra dictum neque massa congue.
        </p>
        
        {/* Features */}
        <div className="features mt-2">
          <div className="feature-item">
            <img className="icon mx-4" src="/assets/images/right_mark.svg" alt="Feature Check" />
            <span>Lacus nisi, et ac dapibus sit eu velit in consequat.</span>
          </div>
          <div className="feature-item mt-2">
            <img className="icon mx-4" src="/assets/images/right_mark.svg" alt="Feature Check" />
            <span>Quisque diam pellentesque bibendum non dui volutpat fringilla.</span>
          </div>
          <div className="feature-item mt-2">
            <img className="icon mx-4" src="/assets/images/right_mark.svg" alt="Feature Check" />
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
          </div>
        </div>
        
        {/* Button */}
        <Link to="/">
          <button type="button" className="btn gold_b ms-4 mt-5">Read More</button>
        </Link>
      </div>

      {/* Right Section */}
      <div className="front_img1 create_pr ms-2 mt-5 w-50">
        <img src="/assets/images/Createproduct_1.svg" className="main-image img  " alt="Main Food" />
        <div className="sub-images d-flex">
          <img src="/assets/images/Createproduct_2.svg" className="sub-image img mt-2" alt="Sub Food 1" />
          <img src="/assets/images/Createproduct_3.svg" className="sub-image img mt-2" alt="Sub Food 2" />
        </div>
      </div>
    </div>
  );
};

export default Createproduct;

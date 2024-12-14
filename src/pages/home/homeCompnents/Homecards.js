import React from 'react';
import './Homecard.css';

const frontImage1 = '/assets/images/Homecard_1.svg';
const frontImage2 = '/assets/images/Homecard_2.svg';
const frontImage3 = '/assets/images/Homecard_3.svg';
const frontImage4 = '/assets/images/Homecard_4.svg';

const Homecards = () => {
  const images = [frontImage1, frontImage2, frontImage3, frontImage4];
  const discounts = ['30%', '40%', '17%', '67%']; 

  return (
    <>
      <h1 className='title2 '>Foody Category</h1>
      <h2 className='highlight2 subtitle2 mt-1'>
        <b><span className='th_orange'>Ch</span>oose Food Item</b>
      </h2> 
      <div className="card-container mt-2">
        {images.map((imgSrc, index) => (
          <div className={`card A${index + 1}`} key={index}>
            <img src={imgSrc} alt={`Food Item ${index + 1}`} className="card-image" />
            <div className="card-overlay">
              <span className="discount-text">Save {discounts[index]}</span>
              <span className="dish-text">Fast Food Dish</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Homecards;

import React from 'react'
import './Whychoose.css'

const Whychoose = () => {
  return (
    <div className=' d-flex col-sm-12 p-0'>
        <div className=' col-sm-8'>
            <div className='d-flex '>
                <div>
                    <img className='whyus_1' src='assets/images/WhyUs_1.svg' alt='WhyUs_1'/>
                </div>
                <div>
                    <img className='whyus_2' src='assets/images/WhyUs_2.svg' alt='WhyUs_2'/>
                </div>
            </div>
            <div className='mt-2'>
                <img className='whyus_3' src='assets/images/WhyUs_3.svg' alt='WhyUs_1'/>
                <img className='whyus_4' src='assets/images/WhyUs_4.svg' alt='WhyUs_1'/>
                <img className='whyus_5' src='assets/images/WhyUs_5.svg' alt='WhyUs_1'/>
                <img className='whyus_6' src='assets/images/WhyUs_6.svg' alt='WhyUs_1'/>
            </div>
        </div>
        <div className='col-sm-4'>
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
    </div>
   
    
  )
}

export default Whychoose
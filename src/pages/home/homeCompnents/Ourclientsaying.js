import React from "react";
import Slider from "react-slick";
import "./Ourclientsaying.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
const backgroundImage = '/assets/images/flower.svg';

export default function Ourclientsaying() {
 
  const settings = {
    dots: true, 
    arrows: false, 
    infinite: true, 
    speed: 500, 
    slidesToShow: 1, 
    slidesToScroll: 1, 
    // autoplay: true,
    autoplaySpeed: 3000, 
    customPaging: () => <div className="custom-dot" />, 
    pauseOnHover: true, 
    focusOnSelect: true,
  };

  return (
    <div className="our-client-section">
      <div className="testimonials-font">
        <p className="section-title">Testimonials</p>
        <p className="our-client-sayingtext">What our client are saying</p>
      </div>
   
      <Slider {...settings}>
       
        <div className="client-cards">
        <div style={{ backgroundImage: `url(${backgroundImage})` }}>
    
    </div>
          <div className="card-elements">
            <div className="client-card">
              <legend>
                <img
                  src="/assets/images/client-pic.svg"
                  alt="client"
                  className="client-pic"
                />
              </legend>
              <div className="quote-container">
                <img
                  src="/assets/images/ouotes.svg"
                  alt="quotes"
                  className="quotes"
                />
              </div>
              <p className="feedback">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quisque diam pellentesque bibendum non du, id volutpat fringilla
                bibendum.
              </p>
              <div className="rating">
                <img
                  src="/assets/images/star.svg"
                  alt="stars"
                  className="stars"
                />
              </div>
              <p className="client-name">Alamin Hasan</p>
              <p className="job">Food Specialist</p>
            </div>
          </div>
        </div>

      
        <div className="client-cards">
          <div className="card-elements">
            <div className="client-card">
              <legend>
                <img
                  src="/assets/images/client-pic.svg"
                  alt="client"
                  className="client-pic"
                />
              </legend>
              <div className="quote-container">
                <img
                  src="/assets/images/ouotes.svg"
                  alt="quotes"
                  className="quotes"
                />
              </div>
              <p className="feedback">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quisque diam pellentesque bibendum non du, id volutpat fringilla
                bibendum.
              </p>
              <div className="rating">
                <img
                  src="/assets/images/star.svg"
                  alt="stars"
                  className="stars"
                />
              </div>
              <p className="client-name">John Doe</p>
              <p className="job">Marketing Manager</p>
            </div>
          </div>
        </div>
        <div className="client-cards">
          <div className="card-elements">
            <div className="client-card">
              <legend>
                <img
                  src="/assets/images/client-pic.svg"
                  alt="client"
                  className="client-pic"
                />
              </legend>
              <div className="quote-container">
                <img
                  src="/assets/images/ouotes.svg"
                  alt="quotes"
                  className="quotes"
                />
              </div>
              <p className="feedback">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quisque diam pellentesque bibendum non du, id volutpat fringilla
                bibendum.
              </p>
              <div className="rating">
                <img
                  src="/assets/images/star.svg"
                  alt="stars"
                  className="stars"
                />
              </div>
              <p className="client-name">John Doe</p>
              <p className="job">Marketing Manager</p>
            </div>
          </div>
        </div>
        <div className="client-cards">
          <div className="card-elements">
            <div className="client-card">
              <legend>
                <img
                  src="/assets/images/client-pic.svg"
                  alt="client"
                  className="client-pic"
                />
              </legend>
              <div className="quote-container">
                <img
                  src="/assets/images/ouotes.svg"
                  alt="quotes"
                  className="quotes"
                />
              </div>
              <p className="feedback">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quisque diam pellentesque bibendum non du, id volutpat fringilla
                bibendum.
              </p>
              <div className="rating">
                <img
                  src="/assets/images/star.svg"
                  alt="stars"
                  className="stars"
                />
              </div>
              <p className="client-name">John Doe</p>
              <p className="job">Marketing Manager</p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

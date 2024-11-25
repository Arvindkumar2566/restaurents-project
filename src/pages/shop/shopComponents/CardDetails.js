import React, { useState } from "react";
import "./CardDetails.css";

const CardDetails = () => {
  const [quantity, setQuantity] = useState(1);


  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };


  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="carddetail-section d-flex container ">
      <div className="sub-item-images ">
        <img src="/assets/images/sub-item1.svg" alt="sub-item" className="sub-item mb-2" />
        <img src="/assets/images/sub-item2.svg" alt="sub-item" className="sub-item mb-2" />
        <img src="/assets/images/sub-item3.svg" alt="sub-item" className="sub-item  mb-2" />
        <img src="/assets/images/sub-item4.svg" alt="sub-item" className="sub-item  mb-2" />
      </div>
      <div className="cart-product">
        <img src="/assets/images/cart-product.svg" alt="cart-product" className="cart-product" />
      </div>
      <div className="cart-product-details">
        <div className="d-flex justify-content-between  ">
          <p className="stock-text text-black">In stock</p>
          <p className="prev-next-text text-black"> - Prev Next -</p>
        </div>
        <div className="border-bottom border-white yummy-chicken-matter">
          <p className="catr-item-name text-black">Yummy Chicken Chup</p>
          <p className="cart-description text-black">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem sunt magni deserunt
            quaerat, beatae unde odio eaque harum consequuntur esse dolor! Id vitae corrupti,
            possimus incidunt officia perspiciatis! Veniam, accusamus!
          </p>
        </div>
        <div className="cost-section">
          
          <h2 className="text-black"> $54.00</h2>
          <div className="rating-section d-flex">
            <div><img src="/assets/images/rating-stars.svg"/></div> 
            <span className="text-black ">   |  5.0 Rating  </span>
            <span className="text-black">|  </span>
            <span className="text-black">22 Reviews</span>
          </div>

         
          <p className="text-black p-2">Dictum/cursus/Risus</p>

        
          <div className="mb-3">
            <button className="decrement-btn"
              onClick={decrementQuantity}
             
            >
              -
            </button>
            <span className="count">{quantity}</span>
            <button className="increment-btn"
              onClick={incrementQuantity}
              
            >
              +
            </button>
            <button className=" add-cart-text">
              🛒 Add to cart
            </button>
          </div>

          {/* Wishlist and Compare */}
          <div >
            <span className="text-dark ml-1 " >♡ Add to Wishlist</span>
            <span className="text-dark">⚖️ Compare</span>
          </div>

          {/* Product Details */}
          <p className="text-dark mt-4">
            <strong>Category:</strong> Pizza
          </p>
          <p className="text-dark"> 
            <strong>Tag:</strong> Our Shop
          </p>

          {/* Social Share Icons */}
          <div>
            <strong className="text-dark" >Share: </strong>
            <a href="#" >
              <img src="/assets/images/insta-icon.svg" alt="insta" className="insta-icon"/>
            </a>
            <a href="#" >
            <img src="/assets/images/fb-icon.svg" alt="fb" className="insta-icon"/>
            </a>
            <a href="#" >
            <img src="/assets/images/x-icon.svg" alt="x" className="insta-icon"/>
            </a>
            <a href="#" >
            <img src="/assets/images/vk-icon.svg" alt="vk" className="insta-icon"/>
            </a>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;

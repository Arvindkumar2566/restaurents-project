import React, { useState } from "react";
import "./CardDetails.css";

const CardDetails = () => {
  const [quantity, setQuantity] = useState(1);

  // Increment Quantity
  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  // Decrement Quantity
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="carddetail-section">
      <div className="sub-item-images">
        <img src="/assets/images/sub-item1.svg" alt="sub-item" className="sub-item" />
        <img src="/assets/images/sub-item2.svg" alt="sub-item" className="sub-item" />
        <img src="/assets/images/sub-item3.svg" alt="sub-item" className="sub-item" />
        <img src="/assets/images/sub-item4.svg" alt="sub-item" className="sub-item" />
      </div>
      <div className="cart-product">
        <img src="/assets/images/cart-product.svg" alt="cart-product" className="cart-product" />
      </div>
      <div className="cart-product-details">
        <div className="d-flex justify-content-between">
          <p className="stock-text">In stock</p>
          <p className="prev-next-text"> - Prev Next -</p>
        </div>
        <div className="border-bottom border-white">
          <p className="catr-item-name">Yummy Chicken Chup</p>
          <p className="cart-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem sunt magni deserunt
            quaerat, beatae unde odio eaque harum consequuntur esse dolor! Id vitae corrupti,
            possimus incidunt officia perspiciatis! Veniam, accusamus!
          </p>
        </div>
        <div>
          {/* Price and Ratings */}
          <h2>$54.00</h2>
          <div className="rating-section d-flex">
            <div><img src="/assets/images/rating-stars.svg"/></div> {/* Static 5-star rating */}
            <span>5.0 Rating  </span>
            <span>|  </span>
            <span>22 Reviews</span>
          </div>

          {/* Product Title */}
          <p style={{ margin: "10px 0" }}>Dictum/cursus/Risus</p>

          {/* Quantity Selector */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "15px" }}>
            <button className="decrement-btn"
              onClick={decrementQuantity}
             
            >
              -
            </button>
            <span>{quantity}</span>
            <button className="increment-btn"
              onClick={incrementQuantity}
              
            >
              +
            </button>
            <button
              style={{
                padding: "5px 15px",
                backgroundColor: "orange",
                border: "none",
                color: "white",
                cursor: "pointer",
              }}
            >
              🛒 Add to cart
            </button>
          </div>

          {/* Wishlist and Compare */}
          <div style={{ marginBottom: "10px" }}>
            <span style={{ marginRight: "15px", cursor: "pointer" }}>♡ Add to Wishlist</span>
            <span style={{ cursor: "pointer" }}>⚖️ Compare</span>
          </div>

          {/* Product Details */}
          <p>
            <strong>Category:</strong> Pizza
          </p>
          <p>
            <strong>Tag:</strong> Our Shop
          </p>

          {/* Social Share Icons */}
          <div>
            <strong>Share: </strong>
            <a href="#" style={{ margin: "0 5px", textDecoration: "none" }}>
              🔗
            </a>
            <a href="#" style={{ margin: "0 5px", textDecoration: "none" }}>
              📘
            </a>
            <a href="#" style={{ margin: "0 5px", textDecoration: "none" }}>
              🐦
            </a>
            <a href="#" style={{ margin: "0 5px", textDecoration: "none" }}>
              📷
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;

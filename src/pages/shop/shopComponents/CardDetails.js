import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./CardDetails.css";

const CardDetails = ({ CartHandler }) => {
  const location = useLocation();
  const productDetails = location.state || {};

  const unitPrice = parseFloat(productDetails.price?.replace("$", "")) || 54.0;
  const [quantity, setQuantity] = useState(1);
  const [isModalVisible, setModalVisible] = useState(false); // State for modal visibility

  const incrementQuantity = () => setQuantity((prevQuantity) => prevQuantity + 1);

  const decrementQuantity = () =>
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));

  const totalCost = (unitPrice * quantity).toFixed(2);

  const handleAddToCart = () => {
    // Show modal
    setModalVisible(true);

    // Hide modal after 3 seconds
    setTimeout(() => {
      setModalVisible(false);
    }, 3000);

    CartHandler({
      id: productDetails.id || Math.random(),
      name: productDetails.name || "Yummy Chicken Chup",
      price: unitPrice,
      image: productDetails.image || "/assets/images/cart-product.svg",
      quantity,
    });
  };

  const socialPlatforms = ["insta", "fb", "x", "vk"];

  return (
    <div className="carddetail-section d-flex container">
      {/* Sub-item Images */}
      <div className="sub-item-images">
        {[1, 2, 3, 4].map((num) => (
          <img
            key={num}
            src={`/assets/images/sub-item${num}.svg`}
            alt={`sub-item${num}`}
            className="sub-item mb-2"
          />
        ))}
      </div>

      {/* Product Image */}
      <div className="cart-product">
        <img
          src={productDetails.image || "/assets/images/cart-product.svg"}
          alt={productDetails.name || "cart-product"}
          className="cart-product"
        />
      </div>

      {/* Product Details */}
      <div className="cart-product-details">
        <div className="d-flex justify-content-between in-stock">
          <p className="stock-text text-black">In stock</p>
          <p className="prev-next-text text-black">- Prev Next -</p>
        </div>

        <div className="border-bottom border-white yummy-chicken-matter">
          <p className="cart-item-name text-black">
            {productDetails.name || "Yummy Chicken Chup"}
          </p>
          <p className="cart-description text-black">
            {productDetails.description ||
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem sunt magni deserunt quaerat, beatae unde odio eaque harum consequuntur esse dolor! Id vitae corrupti, possimus incidunt officia perspiciatis! Veniam, accusamus!"}
          </p>
        </div>

        {/* Pricing Section */}
        <div className="cost-section">
          <h2 className="text-black">${totalCost}</h2>
          <div className="rating-section d-flex">
            <img src="/assets/images/rating-stars.svg" alt="rating-stars" />
            <span className="text-black"> | 5.0 Rating </span>
            <span className="text-black"> | </span>
            <span className="text-black"> 22 Reviews</span>
          </div>
          <p className="text-black p-2">Dictum / Cursus / Risus</p>

          {/* Quantity & Cart */}
          <div className="mb-3">
            <button className="decrement-btn" onClick={decrementQuantity}>
              -
            </button>
            <span className="count">{quantity}</span>
            <button className="increment-btn" onClick={incrementQuantity}>
              +
            </button>
            <button className="
            " onClick={handleAddToCart}>
              🛒 Add to Cart
            </button>
          </div>

          {/* Additional Options */}
          <div>
            <span className="text-dark ml-1">♡ Add to Wishlist</span>
            <span className="text-dark">⚖ Compare</span>
          </div>

          {/* Category & Tags */}
          <p className="text-dark mt-4">
            <strong>Category:</strong> {productDetails.category || "pizza"}
          </p>
          <p className="text-dark">
            <strong>Tag:</strong> Our Shop
          </p>

          {/* Share Section */}
          <div>
            <strong className="text-dark">Share: </strong>
            {socialPlatforms.map((platform) => (
              <a
                key={platform}
                href={`https://www.${platform}.com/`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={`/assets/images/${platform}-icon.svg`}
                  alt={platform}
                  className="insta-icon"
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Modal Overlay */}
      {isModalVisible && (
        <div id="modalOverlay" className="modal-overlay-card pt-2">
          <div className="modal-content-card">
            <span><q>Item added to cart successfully!</q></span>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardDetails;

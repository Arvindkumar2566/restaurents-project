import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./CartCount.css";

export default function CartCount({ cart, setCart }) {
  const navigate=useNavigate();
  const checkout =()=>{
    navigate('/checkoutpage')
  }
  if (!cart || cart.length === 0) {
    return <p>Your cart is empty.</p>;
  }

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const incrementQuantity = (id) => {
    setCart((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (id) => {
    setCart((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    if (window.confirm("Are you sure you want to remove this item?")) {
      setCart((prevItems) => prevItems.filter((item) => item.id !== id));
    }
  };

  return (
    <div className="cart-container container">
      <h2 className="cart-name">Your Cart</h2>
      {cart.length > 0 ? (
        <>
          <div className="cart-items">
            {cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-item-image"
                />
                <div className="cart-item-details">
                  <h3 className="cart-item-name">{item.name}</h3>
                  <p className="cart-item-description">{item.description}</p>
                  <p className="cart-item-price">Price: ${item.price}</p>
                  <div className="quantity-control">
                    <button
                      className="decrement-btn"
                      onClick={() => decrementQuantity(item.id)}
                    >
                      -
                    </button>
                    <span className="quantity">{item.quantity}</span>
                    <button
                      className="increment-btn"
                      onClick={() => incrementQuantity(item.id)}
                    >
                      +
                    </button>
                  </div>
                  <p className="item-total">
                    Item Total: ${(item.price * item.quantity).toFixed(2)}
                  </p>
                  <button
                    className="remove-btn"
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <h3>Cart Summary</h3>
            <p>Total: ${calculateTotal()}</p>
            <button className="checkout-btn" onClick={checkout}>Proceed to Checkout</button>
          </div>
        </>
      ) : (
        <p>Your cart is empty. Add some products!</p>
      )}
    </div>
  );
}

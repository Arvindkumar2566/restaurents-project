import React, { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import "./Checkoutpagebody.css";

const Checkoutpagebody = ({ cart, setCart }) => {
  // eslint-disable-next-line
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    country: "",
    city: "",
    zip: "",
    address1: "",
    address2: "",
    sameAddress: false,
  });

  // eslint-disable-next-line
  const [isFormSubmitted, setIsFormSubmitted] = useState(false); // Disabled unused variable warning
  // eslint-disable-next-line
  const [showDetailsModal, setShowDetailsModal] = useState(false); // Disabled unused variable warning
  const [showModal, setShowModal] = useState(false);
  const navigator = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const proceedHandler = () => {
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phone ||
      !formData.country ||
      !formData.city ||
      !formData.zip ||
      !formData.address1
    ) {
      alert("Please fill in all required fields before proceeding.");
    } else {
      setShowDetailsModal(true);
    }
  };

  const closeDetailsModal = () => {
    setShowDetailsModal(false);
  };

  const placeOrderHandler = () => {
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phone ||
      !formData.country ||
      !formData.city ||
      !formData.zip ||
      !formData.address1
    ) {
      alert("Please fill in all required fields.");
    } else {
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="checkout-page-container">
      <div className="checkout-form-left">
        <h2>Shipping Details</h2>
        <form className="address-form-container">
          <div className="input-group">
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
            />
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group">
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <input
              type="tel"
              placeholder="Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group">
            <input
              type="text"
              placeholder="Company"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
            />
            <select
              name="country"
              value={formData.country}
              onChange={handleInputChange}
            >
              <option>Choose Country</option>
              <option>India</option>
              <option>USA</option>
            </select>
          </div>
          <div className="input-group">
            <select
              name="city"
              value={formData.city}
              onChange={handleInputChange}
            >
              <option>Choose City</option>
              <option>Hyderabad</option>
              <option>New York</option>
            </select>
            <input
              type="text"
              placeholder="Zip Code"
              name="zip"
              value={formData.zip}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group">
            <input
              type="text"
              placeholder="Address Line 1"
              name="address1"
              value={formData.address1}
              onChange={handleInputChange}
            />
            <input
              type="text"
              placeholder="Address Line 2"
              name="address2"
              value={formData.address2}
              onChange={handleInputChange}
            />
          </div>
          <div className="same-address-checkbox">
            <input
              type="checkbox"
              name="sameAddress"
              checked={formData.sameAddress}
              onChange={(e) =>
                setFormData((prevData) => ({
                  ...prevData,
                  sameAddress: e.target.checked,
                }))
              }
            />
            <label htmlFor="sameAddress">Same as Shipping Address</label>
          </div>
          <div className="form-buttons">
            <button
              type="button"
              className="back-to-cart-btn"
              onClick={() => navigator("/cart")}
            >
              Back to Cart
            </button>
            <button
              type="button"
              className="proceed-to-shipping-btn"
              onClick={proceedHandler}
            >
              Proceed to Shipping
            </button>
          </div>
        </form>
      </div>

      {showDetailsModal && (
        <div className="modal-container">
          <div className="modal-content-container">
            <h2>Review Shipping Details</h2>
            <div className="filled-details-container">
              <p>
                <strong>First Name:</strong> {formData.firstName}
              </p>
              <p>
                <strong>Last Name:</strong> {formData.lastName}
              </p>
              <p>
                <strong>Email:</strong> {formData.email}
              </p>
              <p>
                <strong>Phone:</strong> {formData.phone}
              </p>
              <p>
                <strong>Country:</strong> {formData.country}
              </p>
              <p>
                <strong>City:</strong> {formData.city}
              </p>
              <p>
                <strong>Zip Code:</strong> {formData.zip}
              </p>
              <p>
                <strong>Address Line 1:</strong> {formData.address1}
              </p>
              <p>
                <strong>Address Line 2:</strong> {formData.address2}
              </p>
              <p>
                <strong>Same as Shipping Address:</strong>{" "}
                {formData.sameAddress ? "Yes" : "No"}
              </p>
            </div>
            <button className="close-modal-btn" onClick={closeDetailsModal}>
              Close
            </button>
          </div>
        </div>
      )}

      <div className="checkout-summary-right">
        <div className="cart-summary-container">
          {cart.map((item, index) => (
            <div className="cart-item-summary" key={index}>
              <img src={item.image || "/assets/images/item.jpg"} alt={item.name} />
              <div>
                <h4>{item.name}</h4>
                <p>{item.description}</p>
                <p>${item.price}</p>
              </div>
            </div>
          ))}
          <div className="cart-totals-container">
            <p>
              Subtotal: $
              {cart
                .reduce((total, item) => total + item.price * item.quantity, 0)
                .toFixed(2)}
            </p>
            <p>Shipping: Free</p>
            <p>Discount: 25%</p>
            <p>
              Tax: $
              {(
                cart.reduce((total, item) => total + item.price * item.quantity, 0) *
                0.1
              ).toFixed(2)}
            </p>
            <h4>
              Total: $
              {(
                cart.reduce((total, item) => total + item.price * item.quantity, 0) *
                0.75 +
                cart.reduce((total, item) => total + item.price * item.quantity, 0) *
                0.1
              ).toFixed(2)}
            </h4>
          </div>
        </div>
        <button className="place-order-btn" onClick={placeOrderHandler}>
          Place an Order
        </button>
      </div>

      {showModal && (
        <div className="modal-container">
          <div className="modal-content-container">
            <div className="success-animation">
              <svg
                className="checkmark"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 52 52"
              >
                <circle
                  className="checkmark__circle"
                  cx="26"
                  cy="26"
                  r="25"
                  fill="none"
                />
                <path
                  className="checkmark__check"
                  fill="none"
                  d="M14.1 27.2l7.1 7.2 16.7-16.8"
                />
              </svg>
            </div>
            <h2>Order Placed Successfully!</h2>
            <p>Your order has been placed and will be processed shortly.</p>
            <Link className="nav-linkess" to="/home">
                <button className="close-modal-btn" onClick={closeModal}>
              Close
            </button>
                </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkoutpagebody;

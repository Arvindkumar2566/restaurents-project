import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Save user data to localStorage
    localStorage.setItem("user", JSON.stringify({ name, email, password }));

    // Redirect to Sign In page
    navigate("/signin");
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h1 className="signup-title">Sign Up</h1>
        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="signup-input-group">
            <i className="fas fa-user signup-icon"></i>
            <input
              type="text"
              className="signup-input"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="signup-input-group">
            <i className="fas fa-envelope signup-icon"></i>
            <input
              type="email"
              className="signup-input"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="signup-input-group">
            <i className="fas fa-lock signup-icon"></i>
            <input
              type="password"
              className="signup-input"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="signup-input-group">
            <i className="fas fa-lock signup-icon"></i>
            <input
              type="password"
              className="signup-input"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="signup-btn-submit">
            Sign Up
          </button>
          <span className="m-0 d-flex text-secondary">
            Already have an account?
            <Link className="signin ms-2" to="/signin">
              Sign In
            </Link>
          </span>
        </form>
        <div className="signup-divider">
          <hr className="signup-hr" />
          <span className="signup-divider-text">OR</span>
          <hr className="signup-hr" />
        </div>
        <div className="signup-social-signup">
          <button className="signup-btn-social signup-google">
            <i className="fab fa-google signup-social-icon"></i> Sign up with Google
          </button>
          <button className="signup-btn-social signup-apple">
            <i className="fab fa-apple signup-social-icon"></i> Sign up with Apple
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;

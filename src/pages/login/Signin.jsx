import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signin.css";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Retrieve stored user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      alert("No user found. Please sign up first.");
      return;
    }

    if (storedUser.email === email && storedUser.password === password) {
      alert("Sign-in successful!");
      navigate("/home"); // Redirect to Menu page after successful sign-in
    } else {
      alert("Invalid email or password.");
    }
  };

  return (
    <div className="signin-container">
      <div className="signin-box">
        <h1 className="signin-title">Sign In</h1>
        <form className="signin-form" onSubmit={handleSubmit}>
          <div className="signin-input-group">
            <i className="fas fa-envelope signin-icon"></i>
            <input
              type="email"
              className="signin-input"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="signin-input-group">
            <i className="fas fa-lock signin-icon"></i>
            <input
              type="password"
              className="signin-input"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="signin-btn-submit">
            Sign In
          </button>
          <span className="m-0 d-flex text-secondary">
            Don't have an account?
            <Link className="signin ms-2" to="/register">
              Sign Up
            </Link>
          </span>
        </form>
        <div className="signin-divider">
          <hr className="signin-hr" />
          <span className="signin-divider-text">OR</span>
          <hr className="signin-hr" />
        </div>
        <div className="signin-social-signin">
          <button className="signin-btn-social signin-google">
            <i className="fab fa-google signin-social-icon"></i> Sign in with Google
          </button>
          <button className="signin-btn-social signin-apple">
            <i className="fab fa-apple signin-social-icon"></i> Sign in with Apple
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signin;

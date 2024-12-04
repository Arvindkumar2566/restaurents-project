import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../Firebase"; // Correct import path
import { createUserWithEmailAndPassword } from "firebase/auth";
import "./Register.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Save the user's data (name, email) in localStorage
      const userData = {
        name: name, // The username provided during registration
        email: user.email, // Firebase email
      };
      localStorage.setItem("user", JSON.stringify(userData)); // Store in localStorage

      alert("Sign-up successful!");
      navigate("/signin"); // Redirect to Sign In page after successful signup
    } catch (error) {
      alert(error.message); // Show the error message if sign up fails
    }
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
      </div>
    </div>
  );
};

export default Register;

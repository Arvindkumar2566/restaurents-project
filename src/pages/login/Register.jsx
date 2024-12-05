import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "../../Firebase"; // Import auth and db from Firebase
import { createUserWithEmailAndPassword } from "firebase/auth"; // Firebase Auth import
import { setDoc, doc } from "firebase/firestore"; // Firestore imports
import "./Register.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [mobile, setMobile] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      // Create a new user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user; // Firebase User Object

      // Update the user's displayName (Name)
      await user.updateProfile({
        displayName: name, // Set the displayName
      });

      // Save user data (name, email, mobile) to Firestore
      await setDoc(doc(db, "users", user.uid), {
        name: name,
        email: user.email, // Store the Firebase email
        mobile: mobile, // Store the mobile number
      });

      // Save user data in localStorage
      const userData = {
        name: name,
        email: user.email,
      };
      localStorage.setItem("user", JSON.stringify(userData));

      alert("Sign-up successful!");
      navigate("/signin"); // Redirect to Sign In page after successful signup
    } catch (error) {
      alert(error.message); // Show error message if sign-up fails
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
            <i className="fas fa-phone signup-icon"></i>
            <input
              type="text"
              className="signup-input"
              placeholder="Mobile Number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
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

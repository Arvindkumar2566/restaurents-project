import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../Firebase"; // Correct import path
import { signInWithEmailAndPassword } from "firebase/auth";
import "./Signin.css";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      const username = user.displayName || "User";

      const userData = {
        name: username,
        email: user.email,
      };
      localStorage.setItem("user", JSON.stringify(userData));

      alert("Sign-in successful!");
      navigate("/home");
    } catch (error) {
      alert(error.message);
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
            <Link className="signup ms-2" to="/register">
              Sign Up
            </Link>
          </span>
        </form>

        {/* Social sign-in buttons */}
        <div className="signin-social-signin">
          <span className="signin-divider-text">OR</span>
          <button className="signin-btn-social signin-google">
            <img src="/assets/images/google_signin_signup.png" alt="Google logo" className="signin-social-icon" />
            Sign up with Google
          </button>
          <button className="signin-btn-social apple signin-google">
            <img src="/assets/images/apple-logo_signin.png" alt="Google logo" className="signin-social-icon" />
            Sign up with Apple
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

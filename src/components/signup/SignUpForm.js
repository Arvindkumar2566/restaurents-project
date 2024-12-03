import React from "react";
import "./SignUpForm.css";

const SignUpForm = () => {
  return (
    <div className="sign-up-form d-flex justify-content-center align-items-center vh-100">
      <div className="sign-up-form__card card p-4 shadow-lg">
        <h2 className="sign-up-form__title text-center mb-4">Sign Up</h2>
        <form>
          {/* Name Input */}
          <div className="sign-up-form__input-group mb-3 input-group">
            <span className="sign-up-form__icon input-group-text">
              <i className="bi bi-person"></i>
            </span>
            <input
              type="text"
              className="sign-up-form__input form-control"
              placeholder="Name"
              required
            />
          </div>

          {/* Email Input */}
          <div className="sign-up-form__input-group mb-3 input-group">
            <span className="sign-up-form__icon input-group-text">
              <i className="bi bi-envelope"></i>
            </span>
            <input
              type="email"
              className="sign-up-form__input form-control"
              placeholder="Email"
              required
            />
          </div>

          {/* Password Input */}
          <div className="sign-up-form__input-group mb-3 input-group">
            <span className="sign-up-form__icon input-group-text">
              <i className="bi bi-lock"></i>
            </span>
            <input
              type="password"
              className="sign-up-form__input form-control"
              placeholder="Password"
              required
            />
          </div>

          {/* Remember Me */}
          <div className="sign-up-form__remember d-flex align-items-center mb-3">
            <input
              type="checkbox"
              id="rememberMe"
              className="sign-up-form__checkbox me-2"
            />
            <label
              htmlFor="rememberMe"
              className="sign-up-form__label form-check-label"
            >
              Remember me?
            </label>
          </div>

          {/* Sign-Up Button */}
          <button type="submit" className="sign-up-form__button btn btn-warning w-100">
            Sign Up
          </button>

          {/* Forgot Password */}
          <div className="sign-up-form__forgot text-end mt-2">
            <a href="#" className="sign-up-form__link text-decoration-none">
              Forgot password?
            </a>
          </div>

          {/* Divider */}
          <div className="sign-up-form__divider text-center mt-3">
            <span className="text-muted">OR</span>
          </div>

          {/* Google Sign Up */}
          <button
            type="button"
            className="sign-up-form__google-btn btn btn-outline-secondary w-100 mt-2"
          >
            <i className="bi bi-google me-2"></i> Sign up with Google
          </button>

          {/* Apple Sign Up */}
          <button
            type="button"
            className="sign-up-form__apple-btn btn btn-outline-dark w-100 mt-2"
          >
            <i className="bi bi-apple me-2"></i> Sign up with Apple
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;

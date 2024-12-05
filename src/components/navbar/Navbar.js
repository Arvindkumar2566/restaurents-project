import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Navbar.css";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

function Navbar({ size }) {
  const navigate = useNavigate();
  const [userInitial, setUserInitial] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const initial = user.email ? user.email.charAt(0).toUpperCase() : null;
        setUserInitial(initial);
      } else {
        setUserInitial(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleCartClick = () => {
    navigate("/cart");
  };

  const handleSignOut = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
      setUserInitial(null);
      navigate("/home");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <>
      <center>
        <h2 className="mt-2">
          <span style={{ color: "orange" }}>Food</span>tuck
        </h2>
      </center>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active-link" : "nav-link"
                  }
                  to="/home"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active-link" : "nav-link"
                  }
                  to="/menu"
                >
                  Menu
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  to="/blog"
                  id="blogDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Blog
                </NavLink>
                <ul className="dropdown-menu" aria-labelledby="blogDropdown">
                  <li>
                    <NavLink className="dropdown-item" to="/blog/blog">
                      Blog
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/blog/blogdetails">
                      Blog Details
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  to="/about"
                  id="aboutDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  About
                </NavLink>
                <ul className="dropdown-menu" aria-labelledby="aboutDropdown">
                  <li>
                    <NavLink className="dropdown-item" to="/about/mangos">
                      Mangos
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/about/apple">
                      Apple
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/about/bananas">
                      Bananas
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active-link" : "nav-link"
                  }
                  to="/shop"
                >
                  Shop
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active-link" : "nav-link"
                  }
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          <form className="d-flex ms-auto" role="search">
            <input
              className="form-control search"
              type="search"
              placeholder="Search..."
              aria-label="Search"
            />
            <span className="srh_img">
              <img
                src="/assets/images/search_icon.png"
                alt="Search Icon"
                className="search_icon"
                style={{ width: "20px", height: "20px" }}
              />
            </span>
            <img
              src="/assets/images/bag.png"
              alt="Logo"
              className="bag"
              onClick={handleCartClick}
              style={{ cursor: "pointer" }}
            />
            <span className="count1">{size}</span>

            <li className="nav-item d-flex align-items-center ms-2">
              {userInitial ? (
                <>
                  <span
                    className="nav-link profile"
                    onClick={() => navigate("/login/user-details")}
                    style={{ cursor: "pointer" }}
                  >
                    {userInitial}
                  </span>
                  <button
                    type="button"
                    className="btn btn-warning ms-2"
                    onClick={handleSignOut}
                  >
                    SignOut
                  </button>
                </>
              ) : (
                <NavLink
                  className="nav-link"
                  to="/register"
                  style={{ textDecoration: "none" }}
                >
                  <button type="button" className="btn btn-warning">
                    Signup
                  </button>
                </NavLink>
              )}
            </li>
          </form>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

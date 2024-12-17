import React, { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Navbar.css";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

function Navbar({ size }) {
  const navigate = useNavigate();
  const [userInitial, setUserInitial] = useState(null);
  const [search, setSearch] = useState("");
  const [placeholder, setPlaceholder] = useState("");
  const [isScrolled, setIsScrolled] = useState(false); // New state for scroll detection
  const placeholderText = "Find delicious meals..."; // Placeholder text to animate
  const indexRef = useRef(0); // useRef to persist the index value

  useEffect(() => {
    // Handle scroll event
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true); // Add scrolled class if scrolled more than 100px
      } else {
        setIsScrolled(false); // Remove scrolled class if scroll position is less than 100px
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

    // Function to type the placeholder one character at a time
    const typePlaceholder = () => {
      if (indexRef.current < placeholderText.length) {
        setPlaceholder(placeholderText.slice(0, indexRef.current + 1));
        indexRef.current++;
      } else {
        indexRef.current = 0; // Reset index to start typing again
        setPlaceholder(" "); // Clear the placeholder to start from scratch
      }
    };

    const interval = setInterval(typePlaceholder, 200); // Adjust the speed (in ms) here

    return () => {
      clearInterval(interval); // Clean up interval on component unmount
      unsubscribe();
    };
  }, []);

  const handleCartClick = () => {
    navigate("/cart");
  };

  const searchOnsubmit = (e) => {
    e.preventDefault();
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.meals) {
          navigate("/searchfood", { state: { searchData: data.meals } }); // Pass search data to /searchfood
        } else {
          console.error("No meals found");
        }
      })
      .catch((error) => console.error("Error fetching meals:", error));
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
      <nav className={`navbar navbar-expand-lg navbar-dark ${isScrolled ? 'scrolled' : ''}`}> {/* Apply scrolled class */}
        <div className="container-fluid nav_top">
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
                <NavLink className="nav-link" to="/home">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/menu">
                  Menu
                </NavLink>
              </li>
              {/* Other nav items */}
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
                    <NavLink className="dropdown-item"
                    to="/blog/blogdetails">
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
                    <NavLink className="dropdown-item" to="/about/ourstory">
                      Ourstory
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/about/outlets">
                      Outlets
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/about/chefs">
                      Chefs
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/shop">
                  Shop
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          <form className="d-flex ms-auto" role="search" onSubmit={searchOnsubmit}>
            <input
              className="form-control search"
              id="searchInput"
              type="search"
              placeholder={placeholder}
              aria-label="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
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
                    className="btn btn-warning nav_btn"
                    onClick={handleSignOut}
                  >
                    SignOut
                  </button>
                </>
              ) : (
                <NavLink className="nav-linkss" to="/register">
                  <button type="button" className="btn btn-warning  nav_btn ">
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

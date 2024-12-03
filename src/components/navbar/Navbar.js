import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Navbar.css';

function Navbar({ size }) {
  const navigate = useNavigate(); 

  const handleCartClick = () => {
    navigate('/cart'); 
  };

  return (
    <>
      <center>
        <h2 className='mt-2'>
          <span style={{ color: 'orange' }}>Food</span>tuck
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

          {/* Navbar Links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/home" activeclassname="active-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/menu" activeclassname="active-link">
                  Menu
                </NavLink>
              </li>
              {/* Blog Dropdown */}
              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  to="/blog"
                  id="blogDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
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
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  About
                </NavLink>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
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
                <NavLink className="nav-link" to="/shop" activeclassname="active-link">
                  Shop
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact" activeclassname="active-link">
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
                style={{ width: '20px', height: '20px' }}
              />
            </span>
            <img
              src="/assets/images/bag.png"
              alt="Logo"
              className="bag"
              onClick={handleCartClick} 
              style={{ cursor: 'pointer' }}
            />
            <span className='count1'>{size}</span>
          </form>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
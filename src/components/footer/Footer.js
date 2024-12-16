import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="footer mt-5 text-white">
      {/* Email and Subscribe Section */}
      <div className="footer_top container text-center py-4 d-flex justify-content-between">
       <div>
       <h2>
          <span className="text-warning ">Still</span> Need Our Support?
        </h2>
        <p className="mb-4 still-font">
          Don’t wait. Make a smart & logical quote here. It’s pretty easy.
        </p>
       </div>
        <div className="email-subscribe-wrapper d-flex justify-content-center align-items-center">
          <input
            type="email"
            className="email-input"
            placeholder="Enter Your Email"
          />
          <button className="subscribe-button">Subscribe Now</button>
        </div>
      </div>

      {/* Decorative Vector */}
      <div className="text-center my-4">
        <img src="/assets/images/vector.svg" alt="Decorative vector" className="img-fluid" />
      </div>

      {/* Footer Main Content */}
      <div className="container">
        <div className="row">
          {/* About Us */}
          <div className="col-md-3">
            <h5 className="text-warning">About Us</h5>
            <p>
              Corporate clients and leisure travelers rely on us for safe,
              dependable, and professional chauffeur car service in major cities
              across the world.
            </p>
            <div className="d-flex">
              <div>
                <img src="/assets/images/clock.svg" alt="clock" className="clock" />
              </div>
              <div>
                <p className="mb-1 clock-font">Opening Hours</p>
                <p className="mb-0 clock-font">Mon - Sat (8.00 - 6.00)</p>
                <p className="clock-font">Sunday - Closed</p>
              </div>
            </div>
          </div>

          {/* Useful Links */}
          <div className="col-md-3">
            <h5 className="text-warning">Useful Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/about" className="text-decoration-none text-white">
                  About
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-decoration-none text-white">
                  News
                </Link>
              </li>
              <li>
                <Link to="/partners" className="text-decoration-none text-white">
                  Partners
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="text-decoration-none text-white">
                  Contacts
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-decoration-none text-white">
                  Team
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-decoration-none text-white">
                  Menu
                </Link>
              </li>
            </ul>
          </div>

          {/* Help Section */}
          <div className="col-md-3">
            <h5 className="text-warning">Help?</h5>
            <ul className="list-unstyled">
              <li>FAQ</li>
              <li>Terms & Conditions</li>
              <li>Reporting</li>
              <li>Documentation</li>
              <li>Support Policy</li>
              <li>Privacy</li>
            </ul>
          </div>
          {/* Recent Posts */}
          <div className="col-md-3">
            <h5 className="text-warning">Recent Posts</h5>
            <ul className="list-unstyled">
              <li className="d-flex mb-3">
                <img src="/assets/images/post1.svg" alt="Post 1" className="me-3 rounded" />
                <div>
                  <p className="mb-1">20 Feb 2022</p>
                  <p className="mb-0">Keep Your Business</p>
                </div>
              </li>
              <li className="d-flex mb-3">
                <img src="/assets/images/post1.svg" alt="Post 1" className="me-3 rounded" />
                <div>
                  <p className="mb-1">20 Feb 2022</p>
                  <p className="mb-0">Stay organized</p>
                </div>
              </li>
              <li className="d-flex">
                <img src="/assets/images/post4.svg" alt="Post 3" className="me-3 rounded" />
                <div>
                  <p className="mb-1">20 Feb 2022</p>
                  <p className="mb-0">Achieve Goals</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="yellow-bar ">
        <div>
            <p className="mb-0 yellow-bar_content ">Copyright © 2022 by Ayeman. All Rights Reserved.</p>
        </div>
        <div>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="/assets/images/fb1.svg" alt="Facebook" className="me-2 social-media" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="/assets/images/insta.svg" alt="Instagram" className="me-2 social-media" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="/assets/images/x.svg" alt="Twitter" className="me-2 social-media" />
          </a>
          <a href="https://yout.com" target="_blank" rel="noopener noreferrer">
            <img src="/assets/images/youtube_navbar.png" alt="YouTube" className="me-2 social-media" />
          </a>
          <img src="/assets/images/pics.svg" alt="Pics" className="me-2 social-media" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

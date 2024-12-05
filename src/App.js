<<<<<<< HEAD
import React, { useState,useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Menu from "./pages/menu/Menu";
import Blog from "./pages/blog/Blog";
import BlogDetails from "./pages/BlogDetails/Blogdetails";
import Pages from "./pages/page/Page";
import Shop from "./pages/shop/Shop";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import Mangos from "./pages/about/Mangos";
import Apple from "./pages/about/Apple";
import Bananas from "./pages/about/Bananas";
import Starter from "./pages/menu/Menucomponents/Starter";
import CardDetails from "./pages/shop/shopComponents/CardDetails";
import ProductDescription from "./pages/shop/shopComponents/ProductDescription";
import Ourchef from "./pages/OurChef/Ourchef";
import Cart from "./pages/cart/Cart"; // Ensure this path is correct
import SignUpForm from "./components/signup/SignUpForm";
import "./App.css";
=======
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Menu from './pages/menu/Menu';
import Blog from './pages/blog/Blog';
import BlogDetails from './pages/blogDetails/Blogdetails'; // Updated path
import Pages from './pages/page/Page';
import Shop from './pages/shop/Shop';
import Contact from './pages/contact/Contact';
import About from './pages/about/About';
import Mangos from './pages/about/Mangos';
import Apple from './pages/about/Apple';
import Bananas from './pages/about/Bananas';
import Starter from './pages/menu/Menucomponents/Starter';
import CardDetails from './pages/shop/shopComponents/CardDetails';
import ProductDescription from './pages/shop/shopComponents/ProductDescription';
import Ourchef from './pages/OurChef/Ourchef';
import Cart from './pages/cart/Cart'; // Ensure this path is correct

import './App.css';
import Register from './pages/login/Register';
import Signin from './pages/login/Signin';
>>>>>>> b4234b45c1fa2e4a16f241412ee4ebadf5ed1d32

function App() {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart'));
    if (savedCart) {
      setCart(savedCart);
    }
  }, []);

  // Save the cart to localStorage whenever it changes
  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [cart]);

  // Function to handle adding items to the cart
  const CartHandler = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        );
      } else {
        return [...prevCart,item];
      }
    });
  };
  // { ...item, quantity: item.quantity || 1 }
  return (
    <Router>
      <Navbar size={cart.length} /> {/* Display cart size in the navbar */}
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/menu" element={<Menu CartHandler={CartHandler} />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/blog" element={<Blog />} />
          <Route path="/blog/blogdetails" element={<BlogDetails />} />
          <Route path="/pages" element={<Pages />} />
          <Route
            path="/shop"
            element={<Shop cart={cart} CartHandler={CartHandler} />} // Pass cart and handler to Shop
          />
          <Route
            path="/cart"
            element={<Cart cart={cart} setCart={setCart} />} // Pass cart and setter to Cart
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/mangos" element={<Mangos />} />
          <Route path="/about/apple" element={<Apple />} />
          <Route path="/about/bananas" element={<Bananas />} />
          <Route path="/register" element={<Register />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/starter" element={<Starter />} />
          <Route
            path="/card-details"
            element={<CardDetails CartHandler={CartHandler} />} // Pass CartHandler to CardDetails
          />
          <Route path="/product-description" element={<ProductDescription />} />
          <Route path="/ourchef" element={<Ourchef />} />
         
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;

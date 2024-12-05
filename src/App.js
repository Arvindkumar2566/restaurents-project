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
import UserDetail from './pages/login/UserDetails';



import './App.css';
import Register from './pages/login/Register';
import Signin from './pages/login/Signin';

function App() {
  const [cart, setCart] = useState([]);

  // Function to handle adding items to the cart
  const CartHandler = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  return (
    <Router>
      <Navbar size={cart.length} />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/blog" element={<Blog />} />
          <Route path="/blog/blogdetails" element={<BlogDetails />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/shop" element={<Shop cart={cart} CartHandler={CartHandler} />} />
          <Route path="/cart" element={<Cart cart={cart} />} /> {/* Fixed duplicate route */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/mangos" element={<Mangos />} />
          <Route path="/about/apple" element={<Apple />} />
          <Route path="/about/bananas" element={<Bananas />} />
          <Route path="/register" element={<Register />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/starter" element={<Starter />} />
          <Route path="/card-details" element={<CardDetails/>} />
          <Route path="/product-description" element={<ProductDescription />} />
          <Route path="/ourchef" element={<Ourchef />} />
          <Route path="/login/user-details" element={<UserDetail />} />
         
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;

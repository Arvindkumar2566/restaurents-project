import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Menu from './pages/menu/Menu';
import Blog from './pages/blog/Blog';
import Pages from './pages/page/Page';
import BlogDetails from './pages/blogDetails/Blogdetails';
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
import Cart from './pages/cart/Cart';
import UserDetail from './pages/login/UserDetails';
import Register from './pages/login/Register';
import Signin from './pages/login/Signin';
import Checkoutpage from './pages/checkoutpage/Checkoutpage';
import './App.css';

function App() {
  const [cart, setCart] = useState(() => {
    // Restore cart from localStorage on component mount
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Function to handle adding items to the cart
  const CartHandler = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        // Update quantity if item already exists in cart
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        );
      }
      // Add new item to cart
      return [...prevCart, item];
    });
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
          <Route
            path="/shop"
            element={<Shop cart={cart} CartHandler={CartHandler} />}
          />
          <Route
            path="/cart"
            element={<Cart cart={cart} setCart={setCart} />}
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
            element={<CardDetails CartHandler={CartHandler} />}
          />
          <Route path="/product-description" element={<ProductDescription />} />
          <Route path="/ourchef" element={<Ourchef />} />
          <Route path="/login/user-details" element={<UserDetail />} />
          <Route path='/checkoutpage' element={<Checkoutpage/>}/>
          
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;

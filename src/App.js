import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importing React Router v6 components
import Navbar from './components/navbar/Navbar'; // Importing the Navbar component
import Footer from './components/footer/Footer'; // Importing the Footer component
import Home from './pages/home/Home'; // Importing the Home page
import Menu from './pages/menu/Menu'; // Importing the Menu page
import Blog from './pages/blog/Blog'; // Importing the Blog page
import Pages from './pages/page/Page'; // Importing the Pages page
import Shop from './pages/shop/Shop'; // Importing the Shop page
import Contact from './pages/contact/Contact'; // Importing the Contact page
import About from './pages/about/About'; // Importing the About page
import Mangos from './pages/about/Mangos'; // Importing the Mangos subpage
import Apple from './pages/about/Apple'; // Importing the Apple subpage
import Bananas from './pages/about/Bananas'; // Importing the Bananas subpage
import Starter from './pages/menu/Menucomponents/Starter'; // Importing Starter component
import CardDetails from './pages/shop/shopComponents/CardDetails'; // Importing CardDetails component
import './App.css'; // Importing global styles
import ProductDescription from './pages/shop/shopComponents/ProductDescription';
import Ourchef from './pages/OurChef/Ourchef';

function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar component displayed on all pages */}
      <div className="container">
        <Routes>
          <Route path="/home" element={<Home />} /> {/* Route for Home page */}
          <Route path="/menu" element={<Menu />} /> {/* Route for Menu page */}
          <Route path="/blog" element={<Blog />} /> {/* Route for Blog page */}
          <Route path="/pages" element={<Pages />} /> {/* Route for Pages */}
          <Route path="/shop" element={<Shop />} /> {/* Route for Shop page */}
          <Route path="/contact" element={<Contact />} /> {/* Route for Contact page */}
          <Route path="/about" element={<About />} /> {/* Route for About page */}
          <Route path="/about/mangos" element={<Mangos />} /> {/* Route for Mangos subpage */}
          <Route path="/about/apple" element={<Apple />} /> {/* Route for Apple subpage */}
          <Route path="/about/bananas" element={<Bananas />} /> {/* Route for Bananas subpage */}
          <Route path="/starter" element={<Starter />} /> {/* Route for Starter component */}
          <Route path="/card-details" element={<CardDetails />} />
          <Route path="/Product-description " element={<ProductDescription />} />  {/* Route for CardDetails component */}
          <Route path="/" element={<Home />} /> {/* Default route to Home */}
          <Route path="/ourchef" element={<Ourchef/>} /> {/* Default route to Home */}

        </Routes>
      </div>
      <Footer /> {/* Footer component displayed on all pages */}
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importing React Router v6 components
import Navbar from './components/navbar/Navbar'; // Importing the Navbar component
import Footer from './components/footer/Footer'; // Importing the Navbar component
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
import './App.css'; // Importing global styles

function App() {
  return (
    <Router>
      <Navbar /> 

      <div className="container">
        <Routes>
          {/* Routes for different pages */}
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

          {/* Default route to Home if no matching route */}
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;

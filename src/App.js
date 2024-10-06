import React from 'react';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import ProductsList from './components/ProductList';
import { Routes, Route, useLocation } from "react-router-dom"; // Import useLocation
import About from './components/About';
import ProductDetails from './components/ProductDetails';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const location = useLocation(); // Get the current location

  return (
    <div className="App">
      <Navbar />
      {location.pathname === '/' && <Slider />} {/* Show Slider only on the home page */}
      
      <Routes>
        <Route
          path="/"
          element={
            <>
              <ProductsList />
            </>
          }
        />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="product/:productId" element={<ProductDetails />} />
      </Routes>
      
      {/* Render Footer only on the home page */}
      {location.pathname === '/' && <Footer />}
    </div>
  );
}

export default App;

import React from 'react';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import ProductsList from './components/ProductList';
import { Routes, Route } from "react-router-dom";
import About from './components/About';
import ProductDetails from './components/ProductDetails';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
    <Navbar />
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Slider />
            <ProductsList />
          </>
        }
      />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="product/:productId" element={<ProductDetails />} />
    </Routes>
  </div>
);
}

export default App;

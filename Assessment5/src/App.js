import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Login from './Components/Login';
import Cart from './Components/Cart';
import About from './Components/About';
import Products from './Components/Products';
import ProductDetail from './Components/ProductDetail';
import React, { useState } from 'react';

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      name: 'Ralph Lauren Jacket',
      description: 'A stylish Ralph Lauren jacket perfect for any occasion. Made from high-quality materials, it offers both comfort and elegance.',
      rating: 4.5,
      price: 10.00,
      category: 'Fashion',
      image: 'https://wwd.com/wp-content/uploads/2023/06/ralph-lauren-mens-spring-2024-milan-002.jpg?w=800'
    },
    {
      id: 2,
      name: 'Ralph Lauren Shirt',
      description: 'This Ralph Lauren shirt is a wardrobe essential. It features a classic design and premium fabric for a comfortable fit.',
      rating: 4.0,
      price: 20.00,
      category: 'Fashion',
      image: 'https://wwd.com/wp-content/uploads/2023/06/ralph-lauren-mens-spring-2024-milan-005.jpg?w=800'
    },
    {
      id: 3,
      name: 'Louis Vuitton Jacket',
      description: 'Experience luxury with this Louis Vuitton jacket. Its exquisite design and superior craftsmanship make it a standout piece.',
      rating: 5.0,
      price: 30.00,
      category: 'Luxury',
      image: 'https://wwd.com/wp-content/uploads/2024/02/louis-vuitton-typer-the-creator-collection-spring-2024-photos-04.jpg?w=800'
    }
  ]);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
          <Route path="/product/:id" element={<ProductDetail items={items} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

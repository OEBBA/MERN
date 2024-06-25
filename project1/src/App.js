import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Cart from './Components/Cart';
import About from './Components/About';
import Products from './Components/Products';
import ProductDetail from './Components/ProductDetail';
import Orders from './Components/Orders';
import Checkout from './Components/Checkout';
import React, { useState, useEffect } from 'react';

const App = () => {
  const [user, setUser] = useState(null);
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const handleLogin = async (username, password) => {
    try {
      const response = await fetch('http://localhost:4000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });

      if (response.ok) {
        const data = await response.json();
        setUser(data);
        return true;
      } else {
        const errorData = await response.json();
        alert(errorData.error);
        return false;
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('An error occurred while logging in.');
      return false;
    }
  };

  const handleLogout = () => {
    setUser(null);
  };

  const addToCart = async (product) => {
    if (!user) {
      alert('Please log in first');
      return;
    }

    try {
      alert(`${product.name} added to cart!`);
      const response = await fetch('http://localhost:4000/api/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ product, userId: user._id })
      });

      if (response.ok) {
        const updatedCart = await response.json();
        setCartItems(updatedCart);
      } else {
        console.error('Failed to add item to cart');
      }
    } catch (error) {
      console.error('Add to cart error:', error);
    }
  };

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/products');
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      console.log('Fetched items:', data);
      setItems(data);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar isLoggedIn={!!user} username={user?.username} handleLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/checkout" element={<Checkout user={user} />} />
          <Route path="/login" element={<Login handleLogin={handleLogin} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/products" element={<Products items={items} addToCart={addToCart} isLoggedIn={!!user} />} />
          <Route path="/cart" element={<Cart user={user} cartItems={cartItems} />} />
          <Route path="/about" element={<About />} />
          <Route path="/product/:id" element={<ProductDetail items={items} addToCart={addToCart} />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

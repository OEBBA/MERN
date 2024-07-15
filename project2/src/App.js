import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AdminDashboard from './components/AdminDashboard';
import UserRegistration from './components/UserRegistration';
import Home from './components/Home';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import Appointment from './components/Appointment';
import Paid from './components/Paid';



const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/register" element={<UserRegistration />} />
      <Route path="/appointment" element={<Appointment />} />
      <Route path="/paid" element={<Paid />} />
    </Routes>
  </Router>
);

export default App;

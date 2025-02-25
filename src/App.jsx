import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import CabList from './components/CabList';
import Feedback from './components/Feedback';
import Footer from './components/Footer';
import BookingForm from './components/BookingForm';
import Why from './components/Why';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/booking/:destination" element={<BookingForm />} />
      </Routes>
      <Why />
      <CabList />
      <Feedback />
      <Footer />
    </Router>
  );
};

export default App;
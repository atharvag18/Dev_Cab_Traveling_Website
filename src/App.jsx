import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from "./ScrollToTop";
import './App.css';
import NavBar from './components/NavBar.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Contact from './pages/Contact.jsx';
import CabList from './components/CabList.jsx';
import Feedback from './components/FeedBack.jsx';
import Footer from './components/Footer.jsx';
import BookingForm from './components/BookingForm.jsx';
import Why from './components/Why.jsx';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <NavBar />
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
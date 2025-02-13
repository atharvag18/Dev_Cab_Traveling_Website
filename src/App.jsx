import "./index.css";
import "./App.css";

import React, { useEffect } from "react";

import Home from "./components/Home";
import Service from "./components/Service";
import Why from "./components/Why";

import OurRoutes from "./components/OurRoutes";
import Footer from "./components/Footer";
import Navbar from "./components/NavBar";
import AOS from "aos";
import "aos/dist/aos.css";
import CabBooking from "./components/CabBooking";
import CarSection from "./components/CarSection";
import Feedback from "./components/FeedBack";
import CabList from "./components/CabList";
import TaxiRates from "./components/TaxiRates";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="main">
      <Navbar />

      <CabBooking />
      <CarSection />
      <TaxiRates />
      <Home />

      <Service />
      <Why />

      <OurRoutes />
      <CabList />
      <Feedback />
      <Footer />
    </div>
  );
};

export default App;

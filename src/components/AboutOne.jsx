import React from "react";

import ContactToggle from "./ContactToggle";
const AboutOne = () => {
  return (
    <div className="company-wrapper">
     
      <div className="header-banner">
        <div className="banner-overlay">
          <h1>About Dev Cabs</h1>
        </div>
      </div>

    
      <div className="info-section">
        <img src="/images/aboutback.png" alt="About Us" className="info-image" />
        <div className="info-text">
          <h2 style={{fontWeight:"2rem"}}>Trusted Cab <strong>Service In Kolhapur</strong></h2>
          <p>
            Your trusted partner for reliable, comfortable, and affordable car rental services. Whether you’re traveling for business, leisure, or special occasions, we are dedicated to providing seamless transportation solutions tailored to your unique needs.
          </p>
          <p>
            With years of experience in the car rental industry, we have established a reputation for excellence, punctuality, and customer satisfaction.
          </p>
        </div>
      </div>

      
      <div className="goal-section">
        <div className="goal mission">
          <h2>Our Mission</h2>
          <p>
            We aim to transform every journey into a memorable and enjoyable experience by ensuring the best-in-class rental service.
          </p>
        </div>
        <div className="goal vision">
          <h2>Our Vision</h2>
          <p>
            To become the most trusted and preferred cab service provider by consistently delivering quality and value to our customers.
          </p>
        </div>
      </div>
      <ContactToggle/>
    </div>
  );
};

export default AboutOne;
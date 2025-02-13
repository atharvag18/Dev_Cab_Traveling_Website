import React from "react";

const Service = () => {
  return (
    <div className="containerService" id="service">
      <div className="service-heading">
        <h1>Service</h1>
      </div>
      <div className="service-grid">
        <div
          className="service-cards"
          data-aos="flip-right"
          data-aos-duration="1000"
        >
          <img src="../../images/oneway.png" alt="One Way Drop" />
          <h2>One Way Drop</h2>
          <p>
            Seamless One-Way Rides Comfort, Convenience, and Affordable Fares!
            🚖{" "}
          </p>
        </div>
        <div
          className="service-cards"
          data-aos="flip-right"
          data-aos-duration="1000"
        >
          <img src="../../images/twowaydrop.png" alt="Two Way Drop" />
          <h2>Round Trip</h2>
          <p>
            Book Your Round Trip Cab Comfort Both Ways, Hassle-Free Travel! 🚖
          </p>
        </div>
        <div
          className="service-cards"
          data-aos="flip-right"
          data-aos-duration="1000"
        >
          <img src="../../images/customizedtrip.png" alt="Customized Pacakge" />
          <h2>Customized Trip</h2>
          <p>Plan Your Journey, Your Way Book a Custom Trip with Ease! 🚖 </p>
        </div>
        <div
          className="service-cards"
          data-aos="flip-right"
          data-aos-duration="1000"
        >
          <img src="../../images/airport.png" alt="Airport Service" />
          <h2>Airport Pickup And Drop</h2>
          <p>Reliable Airport Transfers – Punctual, Safe & Affordable! 🚖 </p>
        </div>
      </div>
    </div>
  );
};

export default Service;

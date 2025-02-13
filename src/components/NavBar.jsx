import React from "react";

const Navbar = () => {
  return (
    <>
      <div className=" nav_bar " data-aos="fade-down" data-aos-duration="1000">
        <div className="logo-container">
          <div className="logo-icon">
            <img
              src="../../images/logo.png"
              alt="Car Logo"
              className="car-icon"
              style={{
                width: "60px",
                height: "60px",
              }}
            />
          </div>
          <h1 className="logo-text">
            <span
              className="blue"
              style={{ color: "orange", fontSize: "2.0rem" }}
            >
              DEV
            </span>
            <span
              className="orange"
              style={{ color: "white", fontSize: "2.0rem" }}
            >
              CABS
            </span>
          </h1>
        </div>

        <div className="right">
          <a href="#home" className="nav_items">
            Home
          </a>
          <a href="#cars" className="nav_items">
            Cars
          </a>
          <a href="#rates" className="nav_items">
            Rates
          </a>
          <a href="#service" className="nav_items">
            Service
          </a>
          <a href="#tours" className="nav_items">
            Tours
          </a>

          <a href="#contact" className="nav_items">
            Contact
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;

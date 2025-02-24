import React from "react";

import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="info-container">
      <h2 className="info-header">Contact Us</h2>
      <div className="info-card">
        <div className="info-box">
          <div className="info-icon">
            <FaPhone />
          </div>
          <div className="info-content">
            <h3 className="info-title">Phone</h3>
            <p className="info-text">+917020033003
              <br/>
              +918888575730
            </p>
          </div>
        </div>
        <div className="info-box">
          <div className="info-icon">
            <FaEnvelope />
          </div>
          <div className="info-content">
            <h3 className="info-title">Email</h3>
            <p className="info-text">sumitkore3322@gmail.com</p>
          </div>
        </div>
        <div className="info-box">
          <div className="info-icon">
            <FaMapMarkerAlt />
          </div>
          <div className="info-content">
            <h3 className="info-title">Address</h3>
            <p className="info-text">
              Rajarampuri 6th lane, Bus Route Near Canara Bank Kolhapur 416008
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
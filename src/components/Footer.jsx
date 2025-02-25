import React from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer" >
      <div className="footer-content">
        <div className="contact-info">
          {/* Clickable Phone Number */}
          <p>
            <a href="tel:+917020033003" className="contact-link">
              <FaPhoneAlt /> +91 7020033003 / +91 8888575730
            </a>
          </p>
          {/* Clickable Email */}
          <p>
            <a
              href="mailto:sumitkore3322@gmail.com "
              target="_blank"
              className="contact-link"
            >
              <FaEnvelope /> sumitkore3322@gmail.com
            </a>
          </p>
        </div>
        <p>&copy; 2025 Dev Cab Service. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

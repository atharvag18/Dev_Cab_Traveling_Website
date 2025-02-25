import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import './Navbar.css';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeDrawer = () => setIsOpen(false);

  return (
    <>
    <nav className="navbar">
      <div className="navbar-logo" style={{ display: 'flex' }}>
        <img src="/images/logo.png" alt="logo" style={{ width: '50px', height: '50px' }} />
        <h2 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'orangered', fontSize: '2.5rem', fontWeight: 'bold' }}>
          Dev <span style={{ color: 'white' }}>Cab</span>
        </h2>
      </div>

      <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <button className="close-drawer" onClick={closeDrawer}>
          <FaTimes /> Close
        </button>
        <li><Link to="/" onClick={closeDrawer}>Home</Link></li>
        <li><Link to="/about" onClick={closeDrawer}>About</Link></li>
        <li><Link to="/services" onClick={closeDrawer}>Services</Link></li>
        <li><Link to="/contact" onClick={closeDrawer}>Contact</Link></li>
      </ul>

      <div className="menu-icon" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
    </> 
  );
};

export default NavBar;
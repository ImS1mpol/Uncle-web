// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import youtubeLogo from '../img/youtube.png';
import facebookLogo from '../img/facebook.png';
import tiktokLogo from '../img/tiktok.png';
import instagramLogo from '../img/instagram.png';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <ul>
          <li>
            <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
              <img src={youtubeLogo} alt="YouTube" className="social-logo" />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <img src={facebookLogo} alt="Facebook" className="social-logo" />
            </a>
          </li>
          <li>
            <a href="https://www.tiktok.com" target="_blank" rel="noreferrer">
              <img src={tiktokLogo} alt="TikTok" className="social-logo" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
              <img src={instagramLogo} alt="Instagram" className="social-logo" />
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <button className="burger-menu" onClick={toggleMenu}>
          ☰
        </button>
        <ul className={`navbar-box ${isMenuOpen ? 'open' : ''}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/tutorial">Registration Tutorial</Link></li> {/* Updated to link to tutorial page */}
          <li><Link to="/rules">Rules & Guidelines</Link></li> {/* Updated to use Link */}
          <li><Link to="/contact">Contact Us</Link></li> {/* Updated to use Link */}
          <li><Link to="/about">About Us</Link></li> {/* Updated to use Link */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

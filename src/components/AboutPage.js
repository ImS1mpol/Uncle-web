// src/components/AboutPage.js
import React from 'react';
import './AboutPage.css'; // Assuming you have a CSS file for styling
import logo from '../img/logo.png'; // Adjusted path to the logo image

const AboutPage = () => {
  return (
    <div className="about-container">
      <img src={logo} alt="Logo" className="about-logo" />
      <h1>About Us</h1>
      <p>
        Show your skills in PC assembly, coding, and e-sports tournaments like ML, COD, Valorant, and Dota. Compete in the IT Olympics and embrace the fusion of faith, tech, and gaming. Register now!
      </p>
    </div>
  );
};

export default AboutPage;

// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import CenteredMessage from './components/CenteredMessage';
import LoginForm from './components/LoginForm';
import RegistrationPage from './components/RegistrationPage'; 
import RulesPage from './components/RulesPage'; 
import ContactPage from './components/ContactPage'; 
import AboutPage from './components/AboutPage';
import RegistrationTutorial from './components/RegistrationTutorial'; // Import RegistrationTutorial

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="main-container">
          <Routes>
            <Route path="/" element={
              <div className="main-container">
                <div className="left-side">
                  <CenteredMessage />
                </div>
                <div className="right-side">
                  <LoginForm />
                </div>
              </div>
            } />
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/rules" element={<RulesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/tutorial" element={<RegistrationTutorial />} /> {/* Route for RegistrationTutorial */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

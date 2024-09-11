// src/components/RegistrationPage.js

import React, { useState } from 'react';
import './RegistrationPage.css';

const RegistrationPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

  return (
    <div className="page-container">
      <div className="registration-container">
        <h1>REGISTER NOW!</h1>
        <form>
          <div>
            <label htmlFor="name">Name:</label><br />
            <input type="text" id="name" name="name" placeholder="Last Name, First Name, Middle Initial" required />
          </div>
          <div>
            <label htmlFor="email">Email Address:</label><br />
            <input type="email" id="email" name="email" placeholder="Enter your email address" required />
          </div>
          <div>
            <label htmlFor="student-number">Student Number:</label><br />
            <input type="text" id="student-number" name="student-number" placeholder="Enter your student number" required />
          </div>
          <div>
            <label htmlFor="section">Section:</label><br />
            <input type="text" id="section" name="section" placeholder="Enter your section" required />
          </div>
          <div>
            <label htmlFor="password">Password:</label><br />
            <div className="password-container">
              <input type={showPassword ? "text" : "password"} id="password" name="password" placeholder="Enter your password" required />
              <button type="button" onClick={togglePasswordVisibility} className="eye-icon">👁️</button>
            </div>
          </div>
          <div>
            <label htmlFor="confirm-password">Confirm Password:</label>
            <div className="password-container">
              <input type={showConfirmPassword ? "text" : "password"} id="confirm-password" name="confirm-password" placeholder="Confirm your password" required />
              <button type="button" onClick={toggleConfirmPasswordVisibility} className="eye-icon">👁️</button>
            </div>
          </div>
          <button type="submit">Sign Up</button>
        </form>
        <div className="links">
          <a href="/login">Already have an account? Login</a>
          <a href="/forgot-password">Forgot password?</a>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;

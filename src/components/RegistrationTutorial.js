// src/components/RegistrationTutorial.js
import React from 'react';
import './RegistrationTutorial.css';

const RegistrationTutorial = () => {
  return (
    <div className="tutorial-container">
      <h1>Registration Tutorial</h1>
      <p>Welcome to the registration tutorial! Here, we will guide you through the process of signing up for our events.</p>
      
      <h2>Step-by-Step Guide:</h2>
      <ol>
        <li>Visit the registration page by clicking the 'Register' link.</li>
        <li>Fill in the required fields such as Name, Email Address, and Student Number.</li>
        <li>Create a secure password and confirm it.</li>
        <li>Submit your registration by clicking the 'Sign Up' button.</li>
        <li>You will receive a confirmation email with further instructions.</li>
      </ol>
      <p>If you encounter any issues, please contact support.</p>
      
      <h2>Rules and Guidelines</h2>
      <p>This website is designed to streamline and manage event registrations at Our Lady of Fatima University, making it easier for participants to join and actively participate in upcoming events.</p>
      
      <h3>Rules:</h3>
      <ul>
        <li>Users must create an account in order to join the events.</li>
        <li>Provide accurate information during registration.</li>
        <li>Prohibits sharing accounts or using someone else's account without permission.</li>
        <li>No multiple accounts unless necessary.</li>
      </ul>
      
      <h3>Guidelines:</h3>
      <ul>
        <li>Content should be posted in the correct categories or sections.</li>
        <li>Users must avoid off-topic discussions or irrelevant contributions.</li>
        <li>Information will be sent to the Gmail account of the user.</li>
        <li>Ensure you arrive on time for the event and fulfill any pre-event requirements.</li>
      </ul>
    </div>
  );
};

export default RegistrationTutorial;

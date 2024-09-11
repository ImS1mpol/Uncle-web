// src/components/RulesPage.js
import React from 'react';
import './RulesPage.css';

const RulesPage = () => {
  return (
    <div className="rules-container">
      <h1>Rules & Guidelines</h1>
      <p>
        This website is designed to streamline and manage event registrations at Our Lady of Fatima University,
        making it easier for participants to join and actively participate in upcoming events.
      </p>
      <h2>Rules:</h2>
      <ul>
        <li>Users must create an account in order to join the events.</li>
        <li>Provide accurate information during registration.</li>
        <li>Prohibits sharing accounts or using someone else's account without permission.</li>
        <li>No multiple accounts unless necessary.</li>
      </ul>
      <h2>Guidelines:</h2>
      <ul>
        <li>Content should be posted in the correct categories or sections.</li>
        <li>Users must avoid off-topic discussions or irrelevant contributions.</li>
        <li>Information will be sent to the Gmail account of the user.</li>
        <li>Ensure you arrive on time for the event and fulfill any pre-event requirements.</li>
      </ul>
    </div>
  );
};

export default RulesPage;

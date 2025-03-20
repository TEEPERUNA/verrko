import React, { useState } from 'react';
import './BusinessCard.css';

const BusinessCard = ({ name, education, jobTitle, company, email, logo }) => {
  const [showContact, setShowContact] = useState(false);

  return (
    <div className="business-card">
      <div className="card-header">
        <img src={logo} alt={`${company} logo`} className="company-logo" />
        <h2>{name}</h2>
      </div>
      <div className="card-body">
        <p><strong>Education:</strong> {education}</p>
        <p><strong>Job Title:</strong> {jobTitle}</p>
        <p><strong>Company:</strong> {company}</p>
        {showContact && <p><strong>Email:</strong> {email}</p>}
        <button onClick={() => setShowContact(!showContact)}>
          {showContact ? "Hide Contact Details" : "Show Contact Details"}
        </button>
      </div>
    </div>
  );
};

export default BusinessCard;
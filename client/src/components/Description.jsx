import React from 'react';
import './Description.css';

const Description = ({ onCheckSymptomsClick }) => {
  return (
    <div className="description">
      <h2>Welcome to MediDiagnose</h2>
      <p>Discover a comprehensive and user-friendly application designed to assist you in identifying potential diagnoses based on the symptoms you are experiencing. Please note that while this tool provides valuable insights, it is not intended to replace the expertise of a qualified medical professional. Always seek the advice of your physician or another healthcare provider for accurate diagnosis and appropriate treatment recommendations.</p>
    </div>
  );
};

export default Description;
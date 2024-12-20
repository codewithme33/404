import React from 'react';
/* import './Description.css'; */

const Description = ({ onCheckSymptomsClick }) => {
  return (
    <div className="description">
      <h2>Welcome to MediDiagnose</h2>
      <p>Your one-stop app to get a probable diagnosis based on your symptoms. Note: This is not a substitute for professional medical advice.</p>
      <button onClick={onCheckSymptomsClick}>Check Symptoms</button>
    </div>
  );
};

export default Description;

import React from 'react';
/* import './ResultDisplay.css'; */

const ResultDisplay = ({ disease, treatment }) => {
  return (
    <div className="result-display">
      {disease && (
        <div>
          <h3>You might be suffering from: {disease}</h3>
          <p>Recommended Treatment: {treatment}</p>
        </div>
      )}
    </div>
  );
};

export default ResultDisplay;
